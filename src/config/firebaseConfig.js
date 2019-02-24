import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAxmfDyMCWGe-JRjQaCW7hMooww2jKNk44",
  authDomain: "rock-international-ministries.firebaseapp.com",
  databaseURL: "https://rock-international-ministries.firebaseio.com",
  projectId: "rock-international-ministries",
  storageBucket: "rock-international-ministries.appspot.com",
  messagingSenderId: "204835454682"
};

firebase.initializeApp(config);
firebase.firestore()

export default firebase
