/* eslint-disable linebreak-style */
/* eslint-disable indent */
import API_ENDPOINT from '../globals/api-endpoint';

class RentalDBSource {
    static async daftarRental() {
        const response = await fetch(API_ENDPOINT.LIST_RENTAL);
        const responseJson = await response.json();
        return responseJson;
    }

    static async detailRental(id) {
        // eslint-disable-next-line new-cap
        const response = await fetch(API_ENDPOINT.DETAIL_RENTAL(id));
        const responseJson = await response.json();
        return responseJson;
  }
}

export default RentalDBSource;
