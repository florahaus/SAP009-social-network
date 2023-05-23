import { cadastro, nomeAtual } from '../../firebase/firebaseLogin.js';

export default () => {
  const containerCad = document.createElement('div');
  const templateCad = `
    <h2 id="titPagCad"> Cadastro </h2>

    <form class="formPagCad">
    <label id="labelNome" for="inputNome"> Nome de usuário:</label>
     <input id="inputNome" name="nome" placeholder="Username">
     
     <label id="labelEmailCad" for="inputEmailCad"> E-mail:</label>
     <input id="inputEmailCad" name="email" placeholder="email@email.com">

     <label id="labelPasswordCad" for="inputPasswordCad"> Senha:</label>
     <input type="password" id="inputPasswordCad" name="password" placeholder="********">
  
     <button input id="botaoPagCad" type="submit" value="Enviar"> Cadastrar </button>
    </form>
  
    <p id="pPagCad"> Ir para <a id="linkPagLogin" href="/#login">Login </a></p>
    `;
  containerCad.innerHTML = templateCad;

  const emailCad = containerCad.querySelector('#inputEmailCad');
  const passwordCad = containerCad.querySelector('#inputPasswordCad');
  const nome = containerCad.querySelector('#inputNome');
  const botaoPagCad = containerCad.querySelector('#botaoPagCad');

  botaoPagCad.addEventListener('click', (event) => {
    event.preventDefault();
    cadastro(emailCad.value, passwordCad.value)
      .then(() => {
        nomeAtual(nome.value);
        alert('sua conta foi criada!');
        window.location.hash = '#login';
      })
      .catch((error) => {
        alert(error);
      });
  });

  return containerCad;
};
