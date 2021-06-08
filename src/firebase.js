import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCp8s7b70BXc4vfcYRTTx_83aSF6-w2zz8",
    authDomain: "unichat-b4ea3.firebaseapp.com",
    projectId: "unichat-b4ea3",
    storageBucket: "unichat-b4ea3.appspot.com",
    messagingSenderId: "633062749350",
    appId: "1:633062749350:web:83e67eb53731ac8edb7067",
  })
  .auth();
