import { initializeApp }from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe1LSg5r0LHQyXhxBvKi3wBX_GuRHIXho",
  authDomain: "salary-app-ccb0d.firebaseapp.com",
  projectId: "salary-app-ccb0d",
  storageBucket: "salary-app-ccb0d.appspot.com",
  messagingSenderId: "767616045796",
  appId: "1:767616045796:web:369085a57c6769dea7d2f1",
  measurementId: "G-3W4JEE40C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseStorage = getStorage(app);
export const auth = getAuth(app);
