import { auth } from '../../firebase/firebaseLogin.js';
import { addPost } from '../../firebase/firestore.js';

export default () => {
  const containerFeed = document.createElement('div');
  const templateFeed = `
  <link rel="stylesheet" href="./lib/feed/feed.css">

    <h2 id="titFeed"> Registre suas memórias favoritas</h2>

    <form class="formFeed">
     <label id="postFeed" for="inputFeed"> Post:</label>
     <input id="inputFeed" type="textarea" name="postagem" placeholder="escreva sua mensagem para o futuro ou sua memória favorita">
     </form>

     <input id="botaoFeed" type="submit" value="Enviar">
   <section id="tdsPosts">
   <ul id="feedComPosts"></ul>
   </section>

    `;

  containerFeed.innerHTML = templateFeed;
  console.log(auth.currentUser.displayName);

  const ConteudoPost = containerFeed.querySelector('#inputFeed');
  const botaoFeed = containerFeed.querySelector('#botaoFeed');

  botaoFeed.addEventListener('click', (event) => {
    event.preventDefault();
    // função para adicionar post a coleção;
    addPost(ConteudoPost.value, auth.currentUser.displayName, new Date())
      .then(() => {
        console.log(ConteudoPost.value);
      })
      .catch((error) => error);
  });
  return containerFeed;
};
