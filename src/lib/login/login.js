import login from '../../firebase/firebaseLogin.js'

export default () => {
  const container = document.createElement('div');
  const template = `
  <link rel="stylesheet" href="./lib/login/login.css">
  <h2 class="titLogin"> Faça o login ou cadastre-se </h2>

  <form class="formLogin">
    <label id="labelEmail" for="email"> E-mail:</label>
    <input type="email" id="inputEmail" name="email" placeholder="digite seu e-mail">

    <label id="labelPassword" for="password"> Senha:</label>
    <input for="password" id="inputPassword" name="password" placeholder="digite sua senha">

    <button id="botaoLogin" type="submit" value="Enviar"> Enviar </button>
  </form>

  <p id="pCadLogin"> Ainda não possui conta? <a id="linkCadLogin" href="/#Cadastro">Cadastre-se </a></p>
  `;
  container.innerHTML = template; 

  const email = container.querySelector('#inputEmail');
  const password = container.querySelector('#inputPassword'); 
   
  const botaoLogin = container.querySelector('#botaoLogin');
  botaoLogin.addEventListener('click', (event) => {
    event.preventDefault();
    login(email.value, password.value)
  });

  return container;
};
