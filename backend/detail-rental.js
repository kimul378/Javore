
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Fetch data wisata
    const response = await fetch(`http://localhost:3000/api/data_rental/${id}`);
    const data = await response.json();
    const detailContent = document.getElementById('detail-content');

    // Create elements to display data
    const tourismTitle = document.createElement('h2');
    tourismTitle.textContent = data.nama_partner;

    const tourismImage = document.createElement('img');
    tourismImage.src = `http://localhost:3000/uploads/${data.foto_rental}`;
    tourismImage.alt = data.nama_partner;
    tourismImage.style.maxWidth = '100%'; // Adjust image style as needed

    const kota = document.createElement('p');
    kota.textContent = `Jenis: ${data.jenis}`;

    // const tourismRating = document.createElement('p');
    // tourismRating.textContent = `Rating: ${data.rating_wisata}`;

    const tourismDescription = document.createElement('p');
    tourismDescription.textContent = data.deskripsi;

    const travelPlan = document.createElement('p');
    travelPlan.textContent = `Kota: ${data.lokasi}`;

    const day1 = document.createElement('p');
    day1.textContent = `Kontak: ${data.kontak}`;

    
    // Append elements to detailContent
    detailContent.appendChild(tourismTitle);
    detailContent.appendChild(tourismImage);
    detailContent.appendChild(kota);

    detailContent.appendChild(tourismDescription);
    detailContent.appendChild(travelPlan);
    detailContent.appendChild(day1);


});
