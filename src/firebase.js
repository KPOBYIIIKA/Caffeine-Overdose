import firebase from 'firebase/app';
import 'firebase/database';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

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

initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const database = firebase.database();
export default database;