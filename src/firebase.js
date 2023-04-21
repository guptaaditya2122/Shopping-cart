import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZiuARgGMqentaDgE7mqZyA3Qr35XloeE",
  authDomain: "shopify-shoppping-cart.firebaseapp.com",
  projectId: "shopify-shoppping-cart",
  storageBucket: "shopify-shoppping-cart.appspot.com",
  messagingSenderId: "646260121523",
  appId: "1:646260121523:web:095968fbb7b1e581bab5c6",
  measurementId: "G-JB2S9ZFYQX"
};

// Initialize Firebase
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {db , auth, provider};