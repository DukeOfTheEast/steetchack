// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApB_0Wr8zh1mdY65qaSLHh7UIIEKrNRFo",
  authDomain: "steet-chack.firebaseapp.com",
  projectId: "steet-chack",
  storageBucket: "steet-chack.appspot.com",
  messagingSenderId: "735211662470",
  appId: "1:735211662470:web:045095162375772a25f507",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
