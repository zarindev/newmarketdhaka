// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDuWzHu6NJBBrN5hJmpNoVaHEQF1xDffA",
  authDomain: "newmarketdhaka-5f201.firebaseapp.com",
  projectId: "newmarketdhaka-5f201",
  storageBucket: "newmarketdhaka-5f201.appspot.com",
  messagingSenderId: "218911272388",
  appId: "1:218911272388:web:55dfc22d64778ddfa74891",
  measurementId: "G-385LRS8TBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);