import { getAuth , signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from './firebase.js';

const auth = getAuth(app);


function login(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then(response => {
      window.location.hash = "#feed";
    })
    .catch(error => {
      alert(error);
    })
}
export default login;