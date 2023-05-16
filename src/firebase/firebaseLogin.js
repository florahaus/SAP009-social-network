import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { app } from './firebase.js';

const auth = getAuth(app);

// função para logar com o google;

const provider = new GoogleAuthProvider();
const loginGoogle = () => signInWithPopup(auth, provider);

// função para login com e-mail e senha;

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// função para criar novo usuário;

function cadastro(emailCad, passwordCad) {
  return createUserWithEmailAndPassword(auth, emailCad, passwordCad);
}

// função para verificar se existe usuários logados;

function verificarLogado(callback) {
  return onAuthStateChanged(auth, callback);
}

// função para acessar informações do usuário;

function nomeAtual(nome) {
  return updateProfile(auth.currentUser, {
    displayName: nome,
  });
}
//  fazer signOut

const fazerLogout = () => signOut(auth, provider);

export {
  auth,
  loginGoogle,
  login,
  cadastro,
  nomeAtual,
  verificarLogado,
  fazerLogout,
};
