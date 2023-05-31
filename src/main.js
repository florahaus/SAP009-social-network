import login from './lib/login/login.js';
import feed from './lib/feed/feed.js';
import about from './lib/about/about.js';
import cadastro from './lib/cadastro/cadastro.js';
import { verificarLogado } from './firebase/firebaseLogin.js';

function navigateTo(hash) {
  const main = document.querySelector('#conteudoPrincipal');
  main.innerHTML = '';
  switch (hash) {
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
      main.appendChild(login());
  }
}

const init = () => {
  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });
};

window.addEventListener('load', () => {
  verificarLogado((user) => {
    if (user) {
      navigateTo('#feed');
    } else {
      navigateTo('#login');
    }
  });
  init();
});
