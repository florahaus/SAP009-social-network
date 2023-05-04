import {cadastro} from '../../firebase/firebaseLogin.js'

export default () => {
  const containerCad = document.createElement('div');
  const templateCad = `
  <link rel="stylesheet" href="./lib/cadastro/cadastro.css">
    <h2 id="titPagCad"> Cadastro </h2>

    <form class="formPagCad">
     <label id="labelEmailCad" for="e-mail"> E-mail:</label>
     <input for="email" id="inputEmailCad" name="email" placeholder="digite seu e-mail">

     <label id="labelPasswordCad" for="password"> Senha:</label>
     <input for="password" type="password" id="inputPasswordCad" name="password">
  
     <button input id="botaoPagCad" type="submit" value="Enviar"> Cadastrar </button>
    </form>
  
    <p id="pPagCad"> Ir para <a id="linkPagLogin" href="/#login">Login </a></p>
    `;
  containerCad.innerHTML = templateCad;
  
  const emailCad = containerCad.querySelector('#inputEmailCad');
  const passwordCad = containerCad.querySelector('#inputPasswordCad');

  const botaoPagCad = containerCad.querySelector('#botaoPagCad');
  botaoPagCad.addEventListener('click', (event) => {
    event.preventDefault();
    cadastro(emailCad.value, passwordCad.value)
    .then(response => {
      alert("sua conta foi criada!")
       window.location.hash = "#login";
    })
    .catch(error => {
        alert(error);
    })
  });
  
  return containerCad;
};
