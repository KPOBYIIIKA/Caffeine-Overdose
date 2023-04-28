import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBu6yoRht4YEF6btK4dcfLICqZbvWOmkLI",
  authDomain: "caffeine-overdose.firebaseapp.com",
  projectId: "caffeine-overdose",
  storageBucket: "caffeine-overdose.appspot.com",
  messagingSenderId: "51292889440",
  appId: "1:51292889440:web:48f83e12ad6f87e19c3e05",
  measurementId: "G-C0SPM91T3K"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();

export { database, auth };