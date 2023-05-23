import { auth } from '../../firebase/firebaseLogin.js';
import {
  addPost, atualizarPost, mostrarPosts, deletarPost,
} from '../../firebase/firestore.js';

export default () => {
  const containerFeed = document.createElement('div');
  const templateFeed = `

    <h2 id="titFeed"> Registre suas memórias favoritas</h2>

    <form class="formFeed">
     <label id="postFeed" for="inputFeed"> escreva sua mensagem ou sua memória favorita:</label>
     <textarea id="inputFeed" type="textarea" name="postagem" placeholder="escreva seu post" ></textarea>
     <input id="botaoFeed" type="submit" value="Enviar"> 
     </form>
   <section id="tdsPosts">
   <ul id="feedComPosts"></ul>
   </section>

    `;
  containerFeed.innerHTML = templateFeed;

  const postsNoFeed = containerFeed.querySelector('#feedComPosts');

  postsNoFeed.addEventListener('click', (event) => {
    const editarId = event.target.dataset.editarid;
    const salvarId = event.target.dataset.salvarid;
    const apagarId = event.target.dataset.apagarid;
    if (salvarId) {
      const textarea = containerFeed.querySelector(`#contPost${salvarId}`);
      atualizarPost(salvarId, textarea.value);
      textarea.setAttribute('disabled', true);
    }
    if (editarId) {
      const textarea = containerFeed.querySelector(`#contPost${editarId}`);
      textarea.removeAttribute('disabled');
    }
    if (apagarId) {
      if (window.confirm('Deseja mesmo apagar?')) {
        deletarPost(apagarId);
      }
    }
  });
  function infoFeed(posts, id) {
    const postContainer = document.createElement('div');
    const postTemplate = `
    <div id="postCompleto">
    <p id="nomeUser">${posts.displayName} </p>
    <textarea id="contPost${id}" class="no-edit" disabled>${posts.conteudo} </textarea>
    <div id="boxPost">
    <button id="editarPost" data-editarid=${id} >✏️</button>
    <button id="salvarPost" data-salvarid=${id} >✅</button>
    <button id="apagarPost" data-apagarid=${id} >🗑️</button>
    </div>
    </div>
    `;
    postContainer.innerHTML = postTemplate;

    postsNoFeed.appendChild(postContainer);
  }
  function limparTela() {
    postsNoFeed.innerHTML = '';
  }
  mostrarPosts(infoFeed, limparTela);

  const conteudoPost = containerFeed.querySelector('#inputFeed');
  const botaoFeed = containerFeed.querySelector('#botaoFeed');

  botaoFeed.addEventListener('click', (event) => {
    event.preventDefault();
    // verifica se o conteudo do post é vazio ou contem apenas espaços em branco;
    if (conteudoPost.value !== '') {
    // função para adicionar post a coleção;
      addPost(conteudoPost.value, auth.currentUser.displayName, new Date())
        .then(() => {
        })
        .catch((error) => error);
    } else {
      alert('O post não pode ser enviado sem conteúdo!');
    }
  });

  return containerFeed;
};
