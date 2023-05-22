import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
  doc,
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

export function mostrarPosts(infoFeed) {
  const q = query(collection(db, 'posts'), orderBy('data', 'desc'));
  onSnapshot(q, (querySnapshot) => {
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
