//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDOzVQuQ5Gq6-47OJrvMVlq9oFq3MLN8Oc",
    authDomain: "practice-c94-57040.firebaseapp.com",
    databaseURL: "https://practice-c94-57040-default-rtdb.firebaseio.com",
    projectId: "practice-c94-57040",
    storageBucket: "practice-c94-57040.appspot.com",
    messagingSenderId: "189675088043",
    appId: "1:189675088043:web:158fe8c0b1c5f0820f2fee"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
 user= document.getElementById("username").value;
 firebase.database().ref("/").child(user).update({
     purpose:"addingUser"
 });
  }