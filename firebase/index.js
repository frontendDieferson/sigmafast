import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAkaDqA3fdZELFfx3GauarOVxVEOKHzPJA",
  authDomain: "sigmafast-c9433.firebaseapp.com",
  projectId: "sigmafast-c9433",
  storageBucket: "sigmafast-c9433.appspot.com",
  messagingSenderId: "75052118231",
  appId: "1:75052118231:web:c896443edeafb1c6cb8092",
  measurementId: "G-GE81KJF1X6"
})

export const auth = getAuth(firebaseConfig)

export const db = getFirestore(firebaseConfig)

//export const analytics = getAnalytics(app);
