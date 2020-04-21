import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA2RBpR8U3l2U15yTy-vUaZLZVGqRwnYg4",
    authDomain: "reactbingo-bc14f.firebaseapp.com",
    databaseURL: "https://reactbingo-bc14f.firebaseio.com",
    projectId: "reactbingo-bc14f",
    storageBucket: "reactbingo-bc14f.appspot.com",
    messagingSenderId: "33259292663",
    appId: "1:33259292663:web:c8fc64b2a1df8c181fd0f2",
    measurementId: "G-88JYPCP0NL"
  };

firebase.initializeApp(config);

export const db = firebase.firestore();

export const userGamesCollection = db.collection('user_games')

export default firebase;