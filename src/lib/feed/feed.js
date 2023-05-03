export default () => {
  const containerFeed = document.createElement('div');
  const templateFeed = `
    <h2 id="titFeed"> Faça suas postagens</h2>
    <form class="formFeed">
     <label id="postFeed" for="postagens"> Post:</label>
     <input id="inputFeed" type="textarea" name="postagem">
  
     <input id="botaoFeed" type="submit" value="Enviar">
    </form>
    `;
  containerFeed.innerHTML = templateFeed;
  return containerFeed;
};
