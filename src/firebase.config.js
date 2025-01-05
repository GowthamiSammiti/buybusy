// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZn-CsgLxohstmUfa42N4_hn9i2q4QBjA",
  authDomain: "busybuy-f945f.firebaseapp.com",
  projectId: "busybuy-f945f",
  storageBucket: "busybuy-f945f.firebasestorage.app",
  messagingSenderId: "1050266343005",
  appId: "1:1050266343005:web:914b990bd2c7f7dbf5dfb4",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
