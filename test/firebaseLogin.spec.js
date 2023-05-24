import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, signInWithPopup } from 'firebase/firestore';
import { login, cadastro, loginGoogle } from '../src/firebase/firebaseLogin.js';
import { addPost } from '../src/firebase/firestore.js';

jest.mock('firebase/auth');
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
});

describe('teste de post', () => {
  it('deveria adicionar post na coleção', () => {
    addDoc.mockResolvedValueOnce('conteudo', 'displayName');
    const conteudo = 'oi, esse é um teste';
    const displayName = 'Flora';
    addPost(conteudo, displayName);
    expect(addPost).toHaveBeenCalledWith(conteudo, displayName);
  });
});

test('Deve redirecionar para "#feed" após o login', () => {
  signInWithPopup.mockResolvedValueOnce();
  window.location.hash = ''; // Define a hash vazia antes de chamar a função
  loginGoogle();
  expect(signInWithPopup).toHaveBeenCalled(1);
  expect(window.location.hash).toBe('#feed');
});
