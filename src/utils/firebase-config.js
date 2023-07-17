import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCzXfJ1S-S5aHnIHiOL4do-i8TyeeX5vI",
  authDomain: "movie-streaming-fb62f.firebaseapp.com",
  projectId: "movie-streaming-fb62f",
  storageBucket: "movie-streaming-fb62f.appspot.com",
  messagingSenderId: "371318934087",
  appId: "1:371318934087:web:4c53433b58fa4b569a7f62",
  measurementId: "G-YNDZPYBWKD",
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
