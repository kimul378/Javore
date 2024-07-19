document.addEventListener('DOMContentLoaded', async () => {
    const ITEMS_PER_PAGE = 6;
    let currentPage = 1;
    let totalPages = 1;
    let data = [];

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api/data_wisata');
        data = await response.json();
        totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
        displayData();
        displayPagination();
    };

    const displayData = () => {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '';

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const currentData = data.slice(startIndex, endIndex);

        currentData.forEach(item => {
            const tourismItem = document.createElement('div');
            tourismItem.classList.add('tourism-item');
            
            const tourismTitle = document.createElement('h2');
            tourismTitle.textContent = item.nama_wisata;
            tourismTitle.addEventListener('click', () => {
                window.location.href = `detail.html?id=${item.id}`;
            });

            const tourismImage = document.createElement('img');
            tourismImage.src = `http://localhost:3000/uploads/${item.foto_wisata}`;
            tourismImage.alt = item.nama_wisata;

            const tourismDescription = document.createElement('p');
            tourismDescription.textContent = item.deskripsi_wisata;

            const tourismKota = document.createElement('p');
            tourismKota.textContent = `Kota: ${item.kota}`;

            tourismItem.appendChild(tourismTitle);
            tourismItem.appendChild(tourismImage);
            tourismItem.appendChild(tourismKota);
            tourismItem.appendChild(tourismDescription);
                        mainContent.appendChild(tourismItem);
        });
    };

    const displayPagination = () => {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayData();
                displayPagination();
            });
            pagination.appendChild(pageButton);
        }
    };

    fetchData();
});
