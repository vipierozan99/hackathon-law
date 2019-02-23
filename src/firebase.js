import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
var config = {
    apiKey: "AIzaSyA4OtOyoH8fo0KgHNO9FTnfWR6cUaHn8lM",
    authDomain: "hackathon-law.firebaseapp.com",
    databaseURL: "https://hackathon-law.firebaseio.com",
    projectId: "hackathon-law",
    storageBucket: "hackathon-law.appspot.com",
    messagingSenderId: "619938590156"
  };

firebase.initializeApp(config);
export const Datab = firebase.firestore();
export const St = firebase.storage();
export const Auth = firebase.auth();