import { auth } from '../../firebase/firebaseLogin.js';
import { addPost, mostrarPosts } from '../../firebase/firestore.js';

export default () => {
  const containerFeed = document.createElement('div');
  const templateFeed = `
  <link rel="stylesheet" href="./lib/feed/feed.css">

    <h2 id="titFeed"> Registre suas memórias favoritas</h2>

    <form class="formFeed">
     <label id="postFeed" for="inputFeed"> escreva sua mensagem ou sua memória favorita:</label>
     <input id="inputFeed" type="textarea" name="postagem" placeholder="escreva seu post">
    

     <input id="botaoFeed" type="submit" value="Enviar"> 
     </form>
   <section id="tdsPosts">
   <ul id="feedComPosts"></ul>
   </section>

    `;
  containerFeed.innerHTML = templateFeed;
  function infoFeed(posts) {
    const postContainer = document.createElement('div');
    const postTemplate = `
    <div id="boxPost">
    <p id="nomeUser">${posts.displayName} </p>
    <p id="contPost">${posts.conteudo} </p>
    </div>
    `;
    postContainer.innerHTML = postTemplate;

    const juntar = containerFeed.querySelector('#feedComPosts');
    juntar.appendChild(postContainer);
  }
  mostrarPosts(infoFeed);

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
