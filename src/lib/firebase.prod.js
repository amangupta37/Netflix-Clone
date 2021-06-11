import Firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

// import { seedDatabase } from "../seed";
const app = Firebase.initializeApp({
  apiKey: "AIzaSyBH_hmvM1XOzsR9wT6GkJnFJjNgP4F2yto",
  authDomain: "netflix-517b9.firebaseapp.com",
  projectId: "netflix-517b9",
  storageBucket: "netflix-517b9.appspot.com",
  messagingSenderId: "1017366828510",
  appId: "1:1017366828510:web:14946ed0a8ea5623b8b94f",
});

export const firebase = Firebase.firestore();

// seedDatabase(firebase);
export default app;
