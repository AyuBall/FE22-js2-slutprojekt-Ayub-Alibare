// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfC2UlOe1c55GejxC8HP97T9qwbScEwKM",
  authDomain: "jssma-4dd99.firebaseapp.com",
  databaseURL: "https://jssma-4dd99-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jssma-4dd99",
  storageBucket: "jssma-4dd99.appspot.com",
  messagingSenderId: "875237018330",
  appId: "1:875237018330:web:8311e6f67060cebe3bb3e3",
  measurementId: "G-F015DCTN7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
console.log(database);

let referensAdress= ref(database, '/');

set(referensAdress , {
    username: "alrik",
    email: "sdfsdfdsfsf",
    profile_picture : "https://images.unsplash.com/photo-147974096515-c7"
  });