import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA588XiHjRo11Gs1ucgOaD1lESe9M2C8qo",
    authDomain: "project71-8994f.firebaseapp.com",
    databaseURL: "https://project71-8994f.firebaseio.com",
    projectId: "project71-8994f",
    storageBucket: "project71-8994f.appspot.com",
    messagingSenderId: "605094677403",
    appId: "1:605094677403:web:003bdf522e877a4c26af3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();