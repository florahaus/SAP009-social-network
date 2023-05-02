/* eslint-disable default-case */
import login from './lib/login/index.js';
import feed from './lib/feed/index.js';
import about from './lib/about/index.js';
import cadastro from './lib/cadastro/index.js';

const main = document.querySelector('#conteudoPrincipal');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#login':
        main.appendChild(login());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      case '#about':
        main.appendChild(about());
        break;
      case '#cadastro':
        main.appendChild(cadastro());
        break;
      default:
        main.appendChild(cadastro());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});
