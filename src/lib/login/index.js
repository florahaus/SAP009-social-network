// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

export default () => {
  const container = document.createElement('div');
  const template = `
  <h2> Faça o login ou cadastre-se </h2>
  <form>
   <label id="email" for="email"> E-mail:</label>
   <input type="email" id="email" name="email">

   <label id="senha" for="senha"> Senha:</label>
   <input for="password" id="senha" name="senha">

   <input type="submit" value="Enviar">
  </form>

  <p> Ainda não possui conta? <a href="/#Cadastro">Cadastre-se aqui </a></p>
  `;
  container.innerHTML = template;
  return container;
};
