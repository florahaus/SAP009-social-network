import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { app } from './firebase.js';

const db = getFirestore(app);

export const addPost = async (conteudo, displayName, data) => {
  addDoc(collection(db, 'posts'), {
    conteudo,
    displayName,
    data,
  });
  return addPost;
};

export function mostrarPosts(infoFeed, limparTela) {
  const q = query(collection(db, 'posts'), orderBy('data', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    limparTela();
    querySnapshot.forEach((document) => {
      infoFeed(document.data(), document.id);
    });
  });
}
export function atualizarPost(id, novoConteudo) {
  const postAtual = doc(db, 'posts', id);
  updateDoc(postAtual, {
    conteudo: novoConteudo,
  });
}
export function deletarPost(id) {
  deleteDoc(doc(db, 'posts', id));
}
