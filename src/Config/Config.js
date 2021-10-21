import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
   apiKey: "AIzaSyAHLGnkq7jBdeI0uhnGqoAXLOA01Oq237s",
   authDomain: "ecommerce-react-5c671.firebaseapp.com",
   projectId: "ecommerce-react-5c671",
   storageBucket: "ecommerce-react-5c671.appspot.com",
   messagingSenderId: "119634036815",
   appId: "1:119634036815:web:95955ed8d1cf65068b423a",
   measurementId: "G-MHSJ46FQ2W"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}