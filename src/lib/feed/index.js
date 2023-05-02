export default () => {
  const containerFeed = document.createElement('div');
  const templateFeed = `
    <h2> Faça suas postagens</h2>
    <form>
     <label for="postagens"> Post:</label>
     <input type="text" id="postagem" name="postagem" size="50">
  
     <input type="submit" value="Enviar">
    </form>
    `;
  containerFeed.innerHTML = templateFeed;
  return containerFeed;
};
