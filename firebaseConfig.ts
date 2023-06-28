import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDaK1Tp10qnUTcHxOeXu8aDDkqaSJ1BKig",
  authDomain: "rn-auth-93885.firebaseapp.com",
  projectId: "rn-auth-93885",
  storageBucket: "rn-auth-93885.appspot.com",
  messagingSenderId: "745869427503",
  appId: "1:745869427503:web:9116412fb825c857fa17da",
  measurementId: "G-LH9XL07RMN"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)