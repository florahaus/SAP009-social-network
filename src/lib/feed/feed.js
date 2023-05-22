import { auth } from '../../firebase/firebaseLogin.js';
import { addPost, atualizarPost, mostrarPosts } from '../../firebase/firestore.js';

export default () => {
  const containerFeed = document.createElement('div');
  const templateFeed = `
  <link rel="stylesheet" href="./lib/feed/feed.css">

    <h2 id="titFeed"> Registre suas memórias favoritas</h2>

    <form class="formFeed">
     <label id="postFeed" for="inputFeed"> escreva sua mensagem ou sua memória favorita:</label>
     <input id="inputFeed" type="textarea" name="postagem" placeholder="escreva seu post" >
     <input id="botaoFeed" type="submit" value="Enviar"> 
     </form>
   <section id="tdsPosts">
   <ul id="feedComPosts"></ul>
   </section>

    `;
  containerFeed.innerHTML = templateFeed;

  const postsNoFeed = containerFeed.querySelector('#feedComPosts');

  postsNoFeed.addEventListener('click', (event) => {
    const postId = event.target.dataset.postid;
    const salvarId = event.target.dataset.salvarid;
    if (salvarId) {
      const textarea = containerFeed.querySelector(`#contPost${salvarId}`);
      atualizarPost(salvarId, textarea.value);
      textarea.setAttribute('disabled', true);
    }
    console.log(postId);
    if (postId) {
      const textarea = containerFeed.querySelector(`#contPost${postId}`);
      textarea.removeAttribute('disabled');
    }
  });
  function infoFeed(posts, id) {
    const postContainer = document.createElement('div');
    const postTemplate = `
    <div id="boxPost">
    <p id="nomeUser">${posts.displayName} </p>
    <textarea id="contPost${id}" class="no-edit" disabled>${posts.conteudo} </textarea>
    <button id="editarPost" data-postid=${id} >Editar Post</button>
    <button id="salvarPost" data-salvarid=${id} >Salvar Post</button>
    <button id="apagarPost" data-apagarid=${id} >Apagar Post</button>
    </div>
    `;
    postContainer.innerHTML = postTemplate;

    postsNoFeed.appendChild(postContainer);
  }

  mostrarPosts(infoFeed);

  const ConteudoPost = containerFeed.querySelector('#inputFeed');
  const botaoFeed = containerFeed.querySelector('#botaoFeed');

  botaoFeed.addEventListener('click', (event) => {
    event.preventDefault();
    // verifica se o conteudo do post é vazio ou contem apenas espaços em branco;
    if (ConteudoPost.value !== '') {
    // função para adicionar post a coleção;
      addPost(ConteudoPost.value, auth.currentUser.displayName, new Date())
        .then(() => {
        })
        .catch((error) => error);
    } else {
      alert('O post não pode ser enviado sem conteúdo!');
    }
  });

  return containerFeed;
};
