/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
const API_ENDPOINT = {
  LIST_WISATA: 'http://localhost:3000/api/data_wisata',
  DETAIL: (id) => `http://localhost:3000/api/data_wisata/${id}`,
  LIST_RENTAL: 'http://localhost:3000/api/data_rental',
  DETAIL_RENTAL: (id) => `http://localhost:3000/api/data_rental/${id}`, // Perbaiki URL
};

export default API_ENDPOINT;
