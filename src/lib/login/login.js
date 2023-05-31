import {
  login,
  loginGoogle,
} from '../../firebase/firebaseLogin.js';
import google from '../../imagens/google.png';

export default () => {
  const container = document.createElement('div');
  const template = `
  <h2 class="titLogin"> Faça o login ou cadastre-se </h2>

  <form class="formLogin">
    <label id="labelEmail" for="inputEmail"> E-mail:</label>
    <input type="email" id="inputEmail" name="email" placeholder="email@email.com">

    <label id="labelPassword" for="inputPassword"> Senha:</label>
    <input type="password" id="inputPassword" name="password" placeholder="********">

    <button id="botaoLogin" type="submit" value="Enviar"> Enviar </button>
  </form> 

  <section class="popUp">
  <p id="pPopUp">Login com</p>
  <button id="popUpGoogle" type="button">
    <img src="${google}" id="iconeGoogle" alt="icone google">
  </button>
</section>

  <p id="pCadLogin"> Ainda não possui conta? <a id="linkCadLogin" href="/#cadastro">Cadastre-se </a></p>
  `;

  container.innerHTML = template;

  const email = container.querySelector('#inputEmail');
  const password = container.querySelector('#inputPassword');
  const botaoLogin = container.querySelector('#botaoLogin');
  const btnPopUp = container.querySelector('#popUpGoogle');

  botaoLogin.addEventListener('click', (event) => {
    event.preventDefault();
    login(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        error.textContent = error.message;
        error.classList.remove('hidden');
      });
  });

  btnPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => error);
  });
  return container;
};
