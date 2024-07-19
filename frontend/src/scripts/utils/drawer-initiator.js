/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const DrawerInitiator = {
    init({ button, drawer, content }) {
      button.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });
  
      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    },
  
    _toggleDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.toggle('open');
    },
  
    _closeDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.remove('open');
    },
  };
  
  export default DrawerInitiator;