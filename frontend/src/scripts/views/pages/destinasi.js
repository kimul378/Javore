/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
import RestaurantsDBSource from '../../data/wisatadb-source';

const createRestaurantsItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <a href="#/deskripsi/${restaurant.id}" class="restaurant-item__link">
        <img class="restaurant-item__thumbnail"
        src="http://localhost:3000/uploads/${restaurant.foto_wisata}" alt="${restaurant.nama_wisata}">
        <div class="restaurant-item__content">
            <h3>${restaurant.nama_wisata}</h3>
            <div class="see-detail">
                <p class="restaurant-city">${restaurant.kota}</p>
                <span class="detail-arrow">></span>
            </div>
        </div>
    </a>
</div>
`;

const ListRestaurants = {
    async render() {
        const restaurants = await RestaurantsDBSource.daftarWisata();
        const cities = [...new Set(restaurants.map((restaurant) => restaurant.kota))];

        const cityOptions = cities.map((city) => `
            <option value="${city}">${city}</option>`).join('');

        return `
            <div class="content">
                <div class="hero-destinasi">
                    <h1>Explore Java and Find Paradise</h1>
                </div>
                <section class="destination" id="destination-section">
                    <div class="city-name">All City</div>
                    <div class="filter-buttons">
                        <a href="#/destinasi">
                        <button id="btn-destinasi">Destinasi</button></a>
                        <a href="#/rental"><button>Rentals</button></a>
                        <select id="cityFilter" class="city-filter">
                            <option value="">Filter by City</option>
                            ${cityOptions}
                        </select>
                    </div>
                </section>
                <div class="movies" id="movies"></div>
                <div id="pagination"></div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantsDBSource.daftarWisata();
        const restaurantsContainer = document.querySelector('#movies');
        const paginationContainer = document.querySelector('#pagination');
        const itemsPerPage = 10;
        let currentPage = 1;

        const displayRestaurants = (page, city = null) => {
            let filteredRestaurants = restaurants;
            if (city) {
                filteredRestaurants = restaurants.filter((restaurant) => restaurant.kota === city);
            }

            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = page * itemsPerPage;
            const currentRestaurants = filteredRestaurants.slice(startIndex, endIndex);

            restaurantsContainer.innerHTML = '';
            currentRestaurants.forEach((restaurant) => {
                restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
            });

            displayPagination(page, city);
        };

        const displayPagination = (page, city = null) => {
            let filteredRestaurants = restaurants;
            if (city) {
                filteredRestaurants = restaurants.filter((restaurant) => restaurant.kota === city);
            }

            const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
            paginationContainer.innerHTML = '';

            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement('button');
                button.innerText = i;
                button.classList.add('pagination-button');
                if (i === page) {
                    button.classList.add('active');
                }
                button.addEventListener('click', () => {
                    currentPage = i;
                    displayRestaurants(currentPage, city);
                });
                paginationContainer.appendChild(button);
            }
        };

        const cityFilterDropdown = document.querySelector('#cityFilter');
        cityFilterDropdown.addEventListener('change', () => {
            const selectedCity = cityFilterDropdown.value;
            document.querySelector('.city-name').innerText = selectedCity || 'All City';
            displayRestaurants(1, selectedCity);
        });

        displayRestaurants(currentPage);
    },
};

export default ListRestaurants;
