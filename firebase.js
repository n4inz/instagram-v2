import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDZyn7iLjaJj0xfnltj4p9zkp99v9jNF6c",
    authDomain: "instagram-v2-11395.firebaseapp.com",
    projectId: "instagram-v2-11395",
    storageBucket: "instagram-v2-11395.appspot.com",
    messagingSenderId: "818813455534",
    appId: "1:818813455534:web:a98b96f0d932b5d8fd713f"
  };
  
  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
  const db = getFirestore();
  const storage = getStorage();

  export {app, db, storage};