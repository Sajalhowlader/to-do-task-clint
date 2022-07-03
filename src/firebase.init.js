// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt_jNCFjaJAJtatsdikzLsVCsR8PBX04Q",
  authDomain: "to-do-task-dfc7f.firebaseapp.com",
  projectId: "to-do-task-dfc7f",
  storageBucket: "to-do-task-dfc7f.appspot.com",
  messagingSenderId: "695478897145",
  appId: "1:695478897145:web:0d4e5ec4786c02433d1528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth