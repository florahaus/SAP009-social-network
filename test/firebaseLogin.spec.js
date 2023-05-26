import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  addDoc,
  collection,
} from 'firebase/firestore';
import {
  login, cadastro, loginGoogle, verificarLogado,
} from '../src/firebase/firebaseLogin.js';
import {
  addPost,

} from '../src/firebase/firestore.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('testes de autenticação', () => {
  it('deveria fazer login', () => {
    signInWithEmailAndPassword.mockResolvedValueOnce('email', 'password');
    const email = 'email@email.com';
    const password = 'senha123';
    login(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });

  it('deveria fazer cadastro', () => {
    createUserWithEmailAndPassword.mockResolvedValueOnce('emailCad', 'passwordCad');
    const emailCad = 'qualqueremail@email.com';
    const passwordCad = 'qualquersenha';
    cadastro(emailCad, passwordCad);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, emailCad, passwordCad);
  });
  it('Deve redirecionar para "#feed" após o login', () => {
    signInWithPopup.mockResolvedValueOnce();
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
  it('deveria verificar se existe usuario logado', () => {
    onAuthStateChanged.mockResolvedValueOnce();
    verificarLogado();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});

describe('teste de post', () => {
  it('deveria adicionar post na coleção', async () => {
    addDoc.mockResolvedValueOnce();
    const mockCollection = 'collection';
    collection.mockReturnValueOnce(mockCollection);
    const conteudo = 'oi, esse é um teste';
    const displayName = 'Flora';
    const data = 'xx/xx/xxxx';
    await addPost(conteudo, displayName, data);
    expect(addDoc).toHaveBeenCalledWith(mockCollection, { conteudo, data, displayName });
  });
});
