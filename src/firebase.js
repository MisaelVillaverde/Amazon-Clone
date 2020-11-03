import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9byz9VcptDhwOXBbWTlKx8HNPD2wcyoA',
  authDomain: 'clone-54946.firebaseapp.com',
  databaseURL: 'https://clone-54946.firebaseio.com',
  projectId: 'clone-54946',
  storageBucket: 'clone-54946.appspot.com',
  messagingSenderId: '318647422299',
  appId: '1:318647422299:web:3831ea2ae9579e06325e7e',
  measurementId: 'G-RTDTKZ46NW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
