// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsGPh5c82v6KjkaT5CC3WQIDcoTn35ULM",
  authDomain: "projeto-curso-web.firebaseapp.com",
  projectId: "projeto-curso-web",
  storageBucket: "projeto-curso-web.firebasestorage.app",
  messagingSenderId: "1009794295034",
  appId: "1:1009794295034:web:c5befba9b103509d385543",
  measurementId: "G-7NWR3CDRFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export { app, analytics, auth, storage, db };