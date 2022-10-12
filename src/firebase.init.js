// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR_UYVbazE2_um1dVmXXsW3PnowaGYiAA",
  authDomain: "guide-sas.firebaseapp.com",
  projectId: "guide-sas",
  storageBucket: "guide-sas.appspot.com",
  messagingSenderId: "1069160214073",
  appId: "1:1069160214073:web:7502b78e99cdea207967e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
