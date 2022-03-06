import firebase from "firebase/compat/app"; //always need base import
import "firebase/compat/firestore"; //for db
import "firebase/compat/auth";

//any forked projets from github with firebase configs must be replaced with this key from this point on
//The config object is how firebase knows that your application is connected to your firebase account and database!
const config = {
  apiKey: "AIzaSyAWLzjdbh9OyMuTjsj0VafgthxwyxM8hTk",
  authDomain: "crwn-db-bd405.firebaseapp.com",
  projectId: "crwn-db-bd405",
  storageBucket: "crwn-db-bd405.appspot.com",
  messagingSenderId: "852652775038",
  appId: "1:852652775038:web:097df63fccec5ee59e2a2f",
  measurementId: "G-LRK62J0Q9B"
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