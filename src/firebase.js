import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA1QKBvaBYPo5z3AQm1pX4NQHp5tc-uM3A",
  authDomain: "netflix-clone-cbf63.firebaseapp.com",
  projectId: "netflix-clone-cbf63",
  storageBucket: "netflix-clone-cbf63.appspot.com",
  messagingSenderId: "103657429559",
  appId: "1:103657429559:web:4bcb7dee2d1009dc4a3db2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth , db};

