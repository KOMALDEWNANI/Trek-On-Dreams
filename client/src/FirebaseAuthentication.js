import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCHuYb59lG-Ln7EhtUnv2wQbGWOo9npOVc",
  authDomain: "oauthentication-5123b.firebaseapp.com",
  projectId: "oauthentication-5123b",
  storageBucket: "oauthentication-5123b.appspot.com",
  messagingSenderId: "1057807455124",
  appId: "1:1057807455124:web:d9b471584e8961ac433581"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
};

