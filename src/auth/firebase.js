// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_NMD_API_KEY,
  authDomain: process.env.REACT_APP_NMD_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_NMD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_NMD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_NMD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_NMD_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
