// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, DatabaseReference ,child,push} from "firebase/database";
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

let referensAdress = ref(database, '/');

// set(referensAdress,
//   {
//     konto: {
//       username: "alrik",
//       email: "sdfsdfdsfsf",
//       profile_picture: "https://images.unsplash.com/photo-147974096515-c7",
//       update_status: {
//         0: "beginning",
//         1: "end"
//       }
//     }
//   }
// );

let loginBtn : HTMLButtonElement= document.querySelector('#loginbutton') as HTMLButtonElement;

let username = document.querySelector('#username') as HTMLInputElement;

let password = document.querySelector('#password') as HTMLInputElement;

let email = document.querySelector('#email') as HTMLInputElement;

let picOptions =  document. querySelector('input[type = radio]:checked') as HTMLInputElement;




loginBtn.addEventListener('click',account)



function account(): void {
  const database = getDatabase();
  const referensAdress: DatabaseReference = ref(database, '/');
  
  // set(referensAdress, {
  //   konto: {
  //     username: "alrik",
  //     email: "sdfsdfdsfsf",
  //     profile_picture: "https://images.unsplash.com/photo-147974096515-c7",
  //     update_status: {
  //       0: "beginning",
  //       1: "end"
  //     }
  //   }
  // });
  




  push(child(ref(database), 'posts'))

  console.log(push(referensAdress,
    
    {
          username: username.value, // inputHTmlElement  dennas värde
          email: email.value,
          password: password.value,
          profile_picture: picOptions.value,
          update_status: {
            0: "beginning",
            1: "end"
          }
    
    
        }));
  
  console.log('aregisteredaccount')

  //gå till inlogg sidan

  window.location.href = "";
}



