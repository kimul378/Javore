/* eslint-disable linebreak-style */
// import ListRestaurants from '../views/pages/list';
import DeskripsiWisata from '../views/pages/deskripsi';
import DeskripsiRentalPage from '../views/pages/deskripsi-rental';
import DestinasiWisata from '../views/pages/destinasi';
import DetailRestaurants from '../views/pages/deskripsi';
import HomeRestaurants from '../views/pages/home';
import Rental from '../views/pages/rental';
import Tour from '../views/pages/tour';
import About from '../views/pages/about';

const routes = {
  '/': HomeRestaurants, // default page
  '/home': HomeRestaurants,
  '/destinasi': DestinasiWisata,
  '/deskripsi': DeskripsiWisata,
  '/rental': Rental,
  '/tour': Tour,
  '/about': About,
  // '/list': ListRestaurants,
  // '/detail/:id': DetailRestaurants,
  '/deskripsi/:id': DetailRestaurants,
  '/deskripsi-rental/:id': DeskripsiRentalPage,
};
export default routes;
