
console.log(localStorage.getItem("username"));



const moduleUrl = import.meta.url;

let deleteBtn: HTMLButtonElement | null = document.querySelector("#deleteBtn") as HTMLButtonElement;
let addStatus: HTMLButtonElement | null = document.querySelector("#addStatus") as HTMLButtonElement;
let anvandare: HTMLHeadingElement  = document.querySelector("#anvandare") as HTMLHeadingElement;
let mailaddress: HTMLHeadingElement = document.querySelector("#mailaddress") as HTMLHeadingElement;
let profilePic:HTMLImageElement = document.querySelector("#profilePic") as HTMLImageElement;



anvandare.innerHTML = localStorage.getItem("username") as string;

mailaddress.innerHTML= localStorage.getItem("email")?.toString()?? "error";

profilePic.src = localStorage.getItem("picChoice")as string;


deleteBtn.addEventListener("click", () => {



    
})



window.onbeforeunload = function() { //prevent refreash back
    return ;
}



