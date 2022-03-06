// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAHblbY0zrm5jRcLOU7HQ8pmpMP2pCgjd4",
  authDomain: "mju6304101350.firebaseapp.com",
  projectId: "mju6304101350",
  storageBucket: "mju6304101350.appspot.com",
  messagingSenderId: "741824176349",
  appId: "1:741824176349:web:5f58760ab8524a337e7b34",
  measurementId: "G-6WRM87ZH87"
});

const db = getFirestore(firebaseApp);
export default db;