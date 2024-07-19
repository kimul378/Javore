/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      if (page) {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } else {
        this._content.innerHTML = '<p>404 Page Not Found</p>';
      }
    } catch (error) {
      console.error(`Error rendering page: ${error}`);
      this._content.innerHTML = '<p>Oops! Something went wrong.</p>';
    }

    const skipLinkElem = document.querySelector('.skip-to-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
