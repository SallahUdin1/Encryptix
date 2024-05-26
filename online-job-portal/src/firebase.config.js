// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiVpi89E9WU9c1P98rtaGQsnZRmFy-KjA",
  authDomain: "online-job-portal-d1fe1.firebaseapp.com",
  projectId: "online-job-portal-d1fe1",
  storageBucket: "online-job-portal-d1fe1.appspot.com",
  messagingSenderId: "331192209656",
  appId: "1:331192209656:web:2664185db26193a15eeb0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};