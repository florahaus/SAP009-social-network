// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

export default () => {
  const container = document.createElement('div');
  const template = `
  <h2 class="titLogin"> Faça o login ou cadastre-se </h2>
  <form class="formLogin">
   <label id="labelEmail" for="email"> E-mail:</label>
   <input type="email" id="inputEmail" name="email">

   <label id="labelSenha" for="senha"> Senha:</label>
   <input for="password" id="inputSenha" name="senha">

   <input id="botaoLogin" type="submit" value="Enviar">
  </form>

  <p id="pCadLogin"> Ainda não possui conta? <a id="linkCadLogin" href="/#Cadastro">Cadastre-se aqui </a></p>
  `;
  container.innerHTML = template;
  return container;
};
