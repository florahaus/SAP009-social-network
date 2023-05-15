import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { login, cadastro } from '../src/firebase/firebaseLogin.js';

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
