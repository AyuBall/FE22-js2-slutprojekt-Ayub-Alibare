// Import the functions you need from the SDKs you need
import  Cookie from '../../node_modules/js-cookie/dist/js.cookie.mjs';
// import  Cookie from "js-cookie";
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
// const moduleUrl = import.meta.url;  får ej vara sparad som variable
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

let pictureChoice : HTMLInputElement;






loginBtn.addEventListener('click',(e) =>account(e))
// loginBtn.addEventListener('click',account())


function account(e:MouseEvent): void {
  e.preventDefault();

   pictureChoice =  document.querySelector('input[type = radio]:checked') as HTMLInputElement;  // quary alternativen för att annars är det för tidigt
  
  const database = getDatabase();
  const referensAdress: DatabaseReference = ref(database, '/');

  console.log("pictureChoice: ",pictureChoice)
  
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

  
  

  if (username.value =='') {
    alert("username is required")
    return;
  }

  if (password.value =='') {
    alert("password is required")
    return;
  }

  if (email.value =='') {
    alert("email is required")
    return;
  }
  
  if (pictureChoice ==null) {
    alert("no picture is required")
    return;
  }


  // if (hour < 18) {
  //   greeting = "Good day";
  // }



  push(child(ref(database), 'posts'))

  console.log(push(referensAdress,
    
    {
          username: username.value, // inputHTmlElement  dennas värde
          email: email.value,
          password: password.value,
          profile_picture: pictureChoice.value,
          update_status: {
            0: "beginning",
            1: "end"
          }
    
    
        }));
  
  console.log('aregisteredaccount')


  //gå till inlogg sidan
  let convertedUrl = new URL("inloggning.html",import.meta.url).toString(); 
  //let convertedUrl = new URL("otherAccount.html",import.meta.url).toString(); 

  let pic1URL = new URL("pic1.jpg",import.meta.url); 
  let pic2URL = new URL("pic2.jpg",import.meta.url); 
  let pic3URL = new URL("pic3.jpg",import.meta.url); 
  console.log(pic1URL.href,pic2URL.href,pic3URL.href);
  // console.log(convertedUrl);
  // spar cookie med all information
// datum 
// 2 coookies usernam bild


 //läs cookies


 
 Cookie.set('username',  username.value, {expires: 7,sameSite: 'None', secure: true});
 Cookie.set('picChoice',pictureChoice.value , {expires: 7,sameSite: 'None', secure: true});
 Cookie.set('email', email.value , {expires: 7,sameSite: 'None', secure: true});
 

// console.log( 
//    Cookie.get('username'),
//    Cookie.get('picChoice'),
//    Cookie.get('email') 
//    );

 
  // window.location.href = convertedUrl
  window.location.assign(convertedUrl);
}



