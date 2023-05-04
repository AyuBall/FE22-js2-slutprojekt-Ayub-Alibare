import { showInlogg ,showMyAccount, showRegister } from "./displayPages";
// Import the functions you need from the SDKs you need
// import  Cookie from '../../node_modules/js-cookie/dist/js.cookie.mjs';
// import  Cookie from "js-cookie";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, DatabaseReference ,child,push, Database} from "firebase/database";

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
 export const database = getDatabase(app);
 export let baseUrl = ref(database, "/");

 export let pic1URL = new URL("pic1.jpg", import.meta.url);
 export let pic2URL = new URL("pic2.jpg", import.meta.url);
 export let pic3URL = new URL("pic3.jpg", import.meta.url);
//console.log(database);//checka så att databasen är online
// const moduleUrl = import.meta.url;  får ej vara sparad som variable


window.addEventListener("load", (event) => { 
  showInlogg()  // Allaförsta sidan!!!!!  
});

