// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ66X6d_XkM1QUwFGSSNKaXiXVl5czl4s",
  authDomain: "proy-react.firebaseapp.com",
  projectId: "proy-react",
  storageBucket: "proy-react.appspot.com",
  messagingSenderId: "334064765893",
  appId: "1:334064765893:web:eadea40b4e93653ec759ac",
  measurementId: "G-20E56090H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// autentetificacon
const autentificacioon =getAU