/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import API_ENDPOINT from '../globals/api-endpoint';

class WisataDBSource {
    static async daftarWisata() {
        const response = await fetch(API_ENDPOINT.LIST_WISATA);
        const responseJson = await response.json();
        return responseJson;
    }

    static async detailWisata(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson;
    }
}

export default WisataDBSource;
