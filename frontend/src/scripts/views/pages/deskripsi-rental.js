/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// deskripsi-rental.js
import UrlParser from '../../routes/url-parser';
import RentalDBSource from '../../data/rentaldb-source';

const DeskripsiRentalPage = {
  async render() {
    return `
      <div class="detail-content" id="detail-content">
        <!-- Content will be dynamically added here -->
      </div>
    `;
  },

  async afterRender() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const id = urlParams.id;

    // Fetch rental data
    const data = await RentalDBSource.detailRental(id);
    const detailContent = document.getElementById('detail-content');

    // Display rental data in detail content
    const rentalTitle = document.createElement('h2');
    rentalTitle.textContent = data.nama_partner;

    const rentalImage = document.createElement('img');
    rentalImage.src = `http://localhost:3000/uploads/${data.foto_rental}`;
    rentalImage.alt = data.nama_partner;
    rentalImage.style.maxWidth = '100%'; // Adjust image style as needed

    const jenis = document.createElement('p');
    jenis.textContent = `Jenis: ${data.jenis}`;

    const rentalDescription = document.createElement('p');
    rentalDescription.textContent = data.deskripsi;

    const rentalLocation = document.createElement('p');
    rentalLocation.textContent = `Lokasi: ${data.lokasi}`;

    const rentalContact = document.createElement('p');
    rentalContact.textContent = `Kontak: ${data.kontak}`;

    detailContent.appendChild(rentalTitle);
    detailContent.appendChild(rentalImage);
    detailContent.appendChild(jenis);
    detailContent.appendChild(rentalDescription);
    detailContent.appendChild(rentalLocation);
    detailContent.appendChild(rentalContact);

    // Add the additional sections below the review form
    const travelPlanSide = document.createElement('div');
    travelPlanSide.classList.add('travel-plan-side');
    travelPlanSide.innerHTML = `
        <h3>Travel Plan</h3>
        <p id="travelPlan">${data.travel_plan}</p>
    `;

    const categories = document.createElement('div');
    categories.classList.add('categories');
    categories.innerHTML = `
        <h3>Categories</h3>
        <ul>
            <li id="kota">${data.kota}</li>
        </ul>
    `;

    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML = `
        <h3>Have Any Question?</h3>
        <p>Feel free to contact us for more details about this stunning tourist destination.</p>
        <p>📞 081542394942</p>
        <p>📧 admin@javore.com</p>
    `;

    detailContent.appendChild(travelPlanSide);
    detailContent.appendChild(categories);
    detailContent.appendChild(contact);
  }
};

export default DeskripsiRentalPage;
