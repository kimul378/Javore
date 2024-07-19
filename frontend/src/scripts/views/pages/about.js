/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
import { createAboutTemplate } from '../templates/template-creator';

const AboutUs = {
  async render() {
    return `
      <div class="content" id="content">
        ${await createAboutTemplate()}
      </div>
    `;
  },
  
  async afterRender() {
    // Additional logic can be added here, if needed
  }
};

export default AboutUs;
