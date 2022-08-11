import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBTRHe4YqBDRd342roeqkfT6OyN9mnOTc",
  authDomain: "react-movieaddict.firebaseapp.com",
  projectId: "react-movieaddict",
  storageBucket: "react-movieaddict.appspot.com",
  messagingSenderId: "212059222123",
  appId: "1:212059222123:web:5ea61b903bba3af8b8812e",
  measurementId: "G-VL7BHBCGD3"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
// for log in purpose