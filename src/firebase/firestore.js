import {
  getFirestore,
  collection,
  addDoc,
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
