import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCWIjpNPzO8ufH6VwExDeaKHF-yQvA5L80',
  authDomain: 'todo-90128.firebaseapp.com',
  projectId: 'todo-90128',
  storageBucket: 'todo-90128.appspot.com',
  messagingSenderId: '85821778626',
  appId: '1:85821778626:web:b3ab6c51f00706702b295b',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db };
