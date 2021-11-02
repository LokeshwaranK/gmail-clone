import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCE_eciNk40rbW1xh3J-BOiix1L0XDeU0M",
    authDomain: "clone-7587b.firebaseapp.com",
    projectId: "clone-7587b",
    storageBucket: "clone-7587b.appspot.com",
    messagingSenderId: "1074206994179",
    appId: "1:1074206994179:web:7f97766d554c8a71be8336",
    measurementId: "G-L2K4782C8Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};