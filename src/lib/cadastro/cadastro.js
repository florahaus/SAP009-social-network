export default () => {
  const containerCad = document.createElement('div');
  const templateCad = `
    <h2 id="titPagCad"> Cadastro </h2>
    <form class="formPagCad">

     <label id="labelNomeCad" for="nome"> Nome completo:</label>
     <input type="text" id="inputNomeCad" name="nome">
  
     <label id="labelEmailCad" for="e-mail"> E-mail:</label>
     <input for="password" id="inputEmailCad" name="senha">

     <label id="labelSenhaCad" for="senha"> Senha:</label>
     <input for="password" id="inputSenhaCad" name="senha">
  
     <input id="botaoPagCad" type="submit" value="Enviar">

    </form>
  
    <p id="pPagCad"> Ir para <a id="linkPagLogin" href="/#login">Login </a></p>
    `;
  containerCad.innerHTML = templateCad;
  return containerCad;
};
