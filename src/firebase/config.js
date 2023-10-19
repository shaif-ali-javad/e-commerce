import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmIZLwtCyUuQGU17hj_6aFVzhmPabA-NM",
  authDomain: "e-commerce-0-70c23.firebaseapp.com",
  projectId: "e-commerce-0-70c23",
  storageBucket: "e-commerce-0-70c23.appspot.com",
  messagingSenderId: "182780288875",
  appId: "1:182780288875:web:8003ad8571241fe94cb62e",
  measurementId: "G-GLY3JJ0F45",
};

export default firebase.initializeApp(firebaseConfig);
