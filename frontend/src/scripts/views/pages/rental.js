/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
import RentalDBSource from '../../data/rentaldb-source';

const createRentalItemTemplate = (rental) => `
  <div class="restaurant-item">
    <a href="#/deskripsi-rental/${rental.id}" class="restaurant-item__link">
        <img class="restaurant-item__thumbnail"
        src="http://localhost:3000/uploads/${rental.foto_rental}" alt="${rental.nama_partner}">
        <div class="restaurant-item__content">
            <h3>${rental.nama_partner}</h3>
            <div class="see-detail">
                <p class="restaurant-city">${rental.jenis}</p>
                <span class="detail-arrow">></span>
            </div>
        </div>
    </a>
</div>
`;

const ListRentals = {
    async render() {
        const rentals = await RentalDBSource.daftarRental();
        const types = [...new Set(rentals.map((rental) => rental.jenis))];

        const typeOptions = types.map((type) => `
            <option value="${type}">${type}</option>`).join('');

        return `
            <div class="content">
                <div class="hero-destinasi">
                    <h1>Find the Perfect Rental for Your Adventure</h1>
                </div>
                <section class="destination" id="destination-section">
                    <div class="city-name">All Types</div>
                    <div class="filter-buttons">
                        <a href="#/destinasi"><button>Destinasi</button></a>
                        <a href="#/rental">
                        <button id="btn-rental">Rentals</button></a>
                        <select id="cityFilter" class="city-filter">
                            <option value="">Filter by Type</option>
                            ${typeOptions}
                        </select>
                    </div>
                </section>
                <div class="movies" id="movies"></div>
                <div id="pagination"></div>
            </div>
        `;
    },

    async afterRender() {
        const rentals = await RentalDBSource.daftarRental();
        const rentalsContainer = document.querySelector('#movies');
        const paginationContainer = document.querySelector('#pagination');
        const itemsPerPage = 10;
        let currentPage = 1;

        const displayRentals = (page, type = null) => {
            let filteredRentals = rentals;
            if (type) {
                filteredRentals = rentals.filter((rental) => rental.jenis === type);
            }

            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = page * itemsPerPage;
            const currentRentals = filteredRentals.slice(startIndex, endIndex);

            rentalsContainer.innerHTML = '';
            currentRentals.forEach((rental) => {
                rentalsContainer.innerHTML += createRentalItemTemplate(rental);
            });

            displayPagination(page, type);
        };

        const displayPagination = (page, type = null) => {
            let filteredRentals = rentals;
            if (type) {
                filteredRentals = rentals.filter((rental) => rental.jenis === type);
            }

            const totalPages = Math.ceil(filteredRentals.length / itemsPerPage);
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
                    displayRentals(currentPage, type);
                });
                paginationContainer.appendChild(button);
            }
        };

        const typeFilterDropdown = document.querySelector('#cityFilter');
        typeFilterDropdown.addEventListener('change', () => {
            const selectedType = typeFilterDropdown.value;
            document.querySelector('.city-name').innerText = selectedType || 'All Types';
            displayRentals(1, selectedType);
        });

        displayRentals(currentPage);
    },
};

export default ListRentals;
