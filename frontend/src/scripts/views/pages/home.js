/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import { createHomeTemplate } from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = createHomeTemplate();

  },
};

export default ListRestaurants;

document.addEventListener('DOMContentLoaded', function() {
  // Cek apakah splash screen perlu ditampilkan
  const splashScreenShown = sessionStorage.getItem('splashScreenShown');

  if (!splashScreenShown) {
      // Tampilkan splash screen
      showSplashScreen();

      // Set status splash screen ditampilkan
      sessionStorage.setItem('splashScreenShown', 'true');
  } else {
      // Splash screen sudah ditampilkan sebelumnya, langsung sembunyikan
      hideSplashScreen();
  }
});

// Fungsi untuk menampilkan splash screen
function showSplashScreen() {
  document.getElementById('splash-screen').style.display = 'block';
}

// Fungsi untuk menyembunyikan splash screen
function hideSplashScreen() {
  document.getElementById('splash-screen').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {

  setTimeout(function() {
    document.getElementById('splash-screen').style.display = 'none';
  }, 2000);
});
