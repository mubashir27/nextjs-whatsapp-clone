import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALLxaRmmM9IvtMRkIXr-rbegiZqbZ_Vvo",
  authDomain: "whatsapp-clone-b5e9a.firebaseapp.com",
  projectId: "whatsapp-clone-b5e9a",
  storageBucket: "whatsapp-clone-b5e9a.appspot.com",
  messagingSenderId: "1020581443404",
  appId: "1:1020581443404:web:9d08a727f9ffad37ec01e9",
  measurementId: "G-GT57CZCQX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
