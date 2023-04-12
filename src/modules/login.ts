// console.log('fjafjfjfja')
// alert("login.ts")

// import  Cookie from "js-cookie";
// import  Cookie from '../../node_modules/js-cookie/dist/js.cookie.mjs';
const moduleUrl = import.meta.url;

let deleteBtn: HTMLButtonElement | null = document.querySelector("#deleteBtn") as HTMLButtonElement;
let addStatus: HTMLButtonElement | null = document.querySelector("#addStatus") as HTMLButtonElement;
let anvandare: HTMLHeadingElement = document.querySelector("#anvandare") as HTMLHeadingElement;
let mailaddress: HTMLHeadingElement = document.querySelector("#mailaddress") as HTMLHeadingElement;
let profilePic:HTMLImageElement = document.querySelector("#profilePic") as HTMLImageElement;

//console.log(anvandare,mailaddress,addStatus,deleteBtn)
// anvandare.innerHTML=  Cookie.get('username');
// mailaddress.innerHTML= Cookie.get('email');

let pic1URL = new URL("pic1.jpg", import.meta.url); 
let pic2URL = new URL("pic2.jpg", import.meta.url); 
let pic3URL = new URL("pic3.jpg", import.meta.url); 

profilePic.src= pic1URL.href;

// console.log(pic1URL.href,pic2URL.href,pic3URL.href);

// if(Cookie.get('picChoice') == "pic1.jpg")
// profilePic.src =  pic1URL.href;
// else if(Cookie.get('picChoice') == "pic2.jpg")
// profilePic.src =  pic2URL.href;
// else
// profilePic.src =  pic3URL.href;

//profilePic.src= new URL(Cookie.get('picChoice'),import.meta.url).toString()
//profilePic.src= require("../images/pic1.jpg");
// console.log(require("../images/pic1.jpg"));

// console.log(  
//     Cookie.get('username'),
//     Cookie.get('picChoice'),
//     Cookie.get('email')
// );
