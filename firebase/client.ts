// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2muodCc8wkMWXXrrlsRivbmTIH8_MQP4",
  authDomain: "prepwise-fede3.firebaseapp.com",
  projectId: "prepwise-fede3",
  storageBucket: "prepwise-fede3.firebasestorage.app",
  messagingSenderId: "32550638390",
  appId: "1:32550638390:web:a5d9522f206436dce55997",
  measurementId: "G-YMB3LEHLNN",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
