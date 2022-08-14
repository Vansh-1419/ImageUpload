// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ycYwZ0LVLoTlA0XDJ66oq-wGI262nt0",
  authDomain: "upload-359317.firebaseapp.com",
  projectId: "upload-359317",
  storageBucket: "upload-359317.appspot.com",
  messagingSenderId: "273295521170",
  appId: "1:273295521170:web:f30ef25544c3ecff7abd4b",
  measurementId: "G-WPMMWCFJTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
