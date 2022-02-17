import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDYHta_iCDt46u1_gl41WzKIO8lCBSxuS8",
  authDomain: "crown-db-49b9f.firebaseapp.com",
  projectId: "crown-db-49b9f",
  storageBucket: "crown-db-49b9f.appspot.com",
  messagingSenderId: "336138565900",
  appId: "1:336138565900:web:ac448596ac3a64383ff129",
  measurementId: "G-FDB817H128"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;