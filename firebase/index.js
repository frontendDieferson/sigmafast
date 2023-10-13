import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDtUKwxlX3GtEpthUZWWW2Jf9sdkBaW8Zw",
  authDomain: "reservouapp.firebaseapp.com",
  projectId: "reservouapp",
  storageBucket: "reservouapp.appspot.com",
  messagingSenderId: "704822031117",
  appId: "1:704822031117:web:1de763ba3e9e13cd9db644",
  measurementId: "G-KVMLBH41MF"
})

export const auth = getAuth(firebaseConfig)

export const db = getFirestore(firebaseConfig)

