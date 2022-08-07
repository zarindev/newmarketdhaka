// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAd-ymfOR6393Q7oNZgnWz7QYJybcOYyDQ',
  authDomain: 'newmarketdhaka-e5946.firebaseapp.com',
  projectId: 'newmarketdhaka-e5946',
  storageBucket: 'newmarketdhaka-e5946.appspot.com',
  messagingSenderId: '352248418723',
  appId: '1:352248418723:web:9a2c1c84d81e63394d4a16',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
