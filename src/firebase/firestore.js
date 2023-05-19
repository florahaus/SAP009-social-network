import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
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
    querySnapshot.forEach((doc) => {
      infoFeed(doc.data());
    });
  });
}
