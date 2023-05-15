import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from './firebase.js';

export const auth = getAuth(app);

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function cadastro(emailCad, passwordCad) {
  return createUserWithEmailAndPassword(auth, emailCad, passwordCad);
}

export function verificarLogado(callback) {
  return onAuthStateChanged(auth, callback);
}

export function nomeAtual(nome) {
  updateProfile(auth.currentUser, {
    displayName: nome,
  });
}
