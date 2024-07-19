/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
import { createTourTemplate } from '../templates/template-creator';

const tour = {
  async render() {
    return `
      <div class="content" id="content">
        ${await createTourTemplate()}
      </div>
    `;
  },
  
  async afterRender() {
    // Additional logic can be added here, if needed
  }
};

export default tour;
