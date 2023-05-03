import { getAuth , signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from './firebase.js';

const auth = getAuth(app);


export default function login(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then(response => {
      window.location.hash = "#feed";
    })
    .catch(error => {
      alert(error);
    })
}
export function cadastro(emailCad, passwordCad){
    createUserWithEmailAndPassword(auth, emailCad, passwordCad)
    .then(response => {
      alert("sua conta foi criada!")
       window.location.hash = "#login";
    })
    .catch(error => {
        alert(error);
    })
};
