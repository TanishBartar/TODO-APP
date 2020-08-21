import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDdg7x5KJdsv-3CdRC2dVrhmI3ZY-hxbKs",
    authDomain: "clone-c4c54.firebaseapp.com",
    databaseURL: "https://clone-c4c54.firebaseio.com",
    projectId: "clone-c4c54",
    storageBucket: "clone-c4c54.appspot.com",
    messagingSenderId: "352255649162",
    appId: "1:352255649162:web:5af66ea1067bafc92fd473",
    measurementId: "G-EJEZGQPNE1"
  };

 const app = firebase.initializeApp(firebaseConfig);
 const db = app.firestore();

 export default db;

