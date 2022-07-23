import firebase from "firebase/app"
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB9SwgLBnFwsVqp7zZByemxy6gLl8sgajo",
    authDomain: "disney-clone-a6c88.firebaseapp.com",
    projectId: "disney-clone-a6c88",
    storageBucket: "disney-clone-a6c88.appspot.com",
    messagingSenderId: "472534866634",
    appId: "1:472534866634:web:ce6b3a8bcce21504533233"
  };

  if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  const firestore = firebase.firestore();

  export { firestore }