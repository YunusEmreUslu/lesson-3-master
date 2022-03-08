import firebase from "firebase/compat/app"; //always need base import
import "firebase/compat/firestore"; //for db
import "firebase/compat/auth";

//any forked projets from github with firebase configs must be replaced with this key from this point on
//The config object is how firebase knows that your application is connected to your firebase account and database!
const config = {
  apiKey: "AIzaSyDYHta_iCDt46u1_gl41WzKIO8lCBSxuS8",
  authDomain: "crown-db-49b9f.firebaseapp.com",
  projectId: "crown-db-49b9f",
  storageBucket: "crown-db-49b9f.appspot.com",
  messagingSenderId: "336138565900",
  appId: "1:336138565900:web:ac448596ac3a64383ff129",
  measurementId: "G-FDB817H128"
};
//async-await is a more readable way of writing asysnronous code then 
//".then()" chaining, try catch may be used to catch the errors
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //check if data in place, if not create a user using userAuth object
  if (!snapShot.exists){
     const {displayName, email } = userAuth;
     const createdAt = new Date();

     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData,
       })
     } catch (error) {
       console.log('error creating user', error.message);
     }
  }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;