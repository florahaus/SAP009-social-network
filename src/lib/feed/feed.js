import { auth } from '../../firebase/firebaseLogin.js';

export default () => {
  const containerFeed = document.createElement('div');
  const templateFeed = `
  <link rel="stylesheet" href="./lib/feed/feed.css">
    <h2 id="titFeed"> Registre suas memórias favoritas</h2>
    <form class="formFeed">
     <label id="postFeed" for="postagens"> Post:</label>
     <input id="inputFeed" type="textarea" name="postagem">
  
     <input id="botaoFeed" type="submit" value="Enviar">
    </form>
    `;
  containerFeed.innerHTML = templateFeed;
  console.log(auth.currentUser.displayName);
  return containerFeed;
};
