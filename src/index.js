/* eslint-disable default-case */
import login from './lib/login/login.js';
import feed from './lib/feed/feed.js';
import about from './lib/about/about.js';
import cadastro from './lib/cadastro/cadastro.js';

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
