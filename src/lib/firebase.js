// place files you want to import through the `$lib` alias in this folder.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD--bRqqNA4bFiIIXOLY0wjyrsaTwLngL0",
  authDomain: "obra-3d33e.firebaseapp.com",
  projectId: "obra-3d33e",
  storageBucket: "obra-3d33e.appspot.com",
  messagingSenderId: "123833748311",
  appId: "1:123833748311:web:d60a7abe21e056a8194c12",
};

// initialize firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
