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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
        console.log('error creating user', error.messsage);
    }
  }
  return userRef;
}; 



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;