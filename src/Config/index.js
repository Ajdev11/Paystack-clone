// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkLtmsVnf0fEAWyKOD44liR--BGRljgi0",
  authDomain: "paystack-clone.firebaseapp.com",
  projectId: "paystack-clone",
  storageBucket: "paystack-clone.appspot.com",
  messagingSenderId: "356181292628",
  appId: "1:356181292628:web:b2bd4b562ced0e8fdedfc1",
  measurementId: "G-M3ZVK0CT0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app