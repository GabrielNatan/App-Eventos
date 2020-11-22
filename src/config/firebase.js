import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGReuFi4HQbt4J4NXn-Av45KpD7yr4bs8",
    authDomain: "eventos-266a9.firebaseapp.com",
    databaseURL: "https://eventos-266a9.firebaseio.com",
    projectId: "eventos-266a9",
    storageBucket: "eventos-266a9.appspot.com",
    messagingSenderId: "153441136127",
    appId: "1:153441136127:web:d4752cb4425e4221c0cbca"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);