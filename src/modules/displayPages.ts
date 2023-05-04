import { getDatabase, onValue, update, ref, set, get, DatabaseReference, child, push, remove } from "firebase/database";
import { database, baseUrl, pic1URL, pic2URL, pic3URL } from "../modules/index";

type userType = {
    username: string;
    status: string;
    picOption: string;
};

export function showMyAccount() {
    document.body.innerHTML = `
    <header><h1>Lvls</h1></header>
        <nav>
            <ul>
                <li><a id="home" href="Home">Home</a></li>
              
                <li><a href id="LogOut">LogOut</a></li>
            </ul>
        </nav>

        <aside>
        </aside>

        <main>
          <div>
            <img id="profilePic" width="300" src="/src/images/logo.png" alt="profilePic">
            <div>
              <h2 id="anvandare">username</h2>
              <h2 id="mailaddress">email</h2>
              <button id="addStatus">Addstatus</button>
            </div>
          </div>

          <div>
            <label for="status"></label> <input id="statusUpdate" type="text" placeholder="statsupdate"  >
            <h4 id="addeddupdate"></h4>
          </div>
        </main>


        <footer>
          <button id="deleteBtn">Delete createAccount</button>
        </footer>
    `;

    console.log(localStorage.getItem("username"));
    if (localStorage.getItem("username") == undefined) {
        // ifall man är utloggad (har ingen lokalstorage)
        alert("You are logged out");
        showInlogg();
        return;
    }
    // console.log('fjafjfjfja')
    // alert("login.ts")

    const moduleUrl = import.meta.url;
    let anchorHome: HTMLAnchorElement | null = document.querySelector("#home") as HTMLAnchorElement;
    console.log(anchorHome);
    anchorHome.addEventListener("click", () => {});

    let statusUpdate: HTMLInputElement = document.querySelector("#statusUpdate") as HTMLInputElement;
    let LogOut: HTMLAnchorElement | null = document.querySelector("#LogOut") as HTMLAnchorElement;
    let deleteBtn: HTMLButtonElement | null = document.querySelector("#deleteBtn") as HTMLButtonElement;
    let addStatus: HTMLButtonElement | null = document.querySelector("#addStatus") as HTMLButtonElement;
    let anvandare: HTMLHeadingElement = document.querySelector("#anvandare") as HTMLHeadingElement;
    let mailaddress: HTMLHeadingElement = document.querySelector("#mailaddress") as HTMLHeadingElement;
    let profilePic: HTMLImageElement = document.querySelector("#profilePic") as HTMLImageElement;
    let aside: HTMLDivElement = document.querySelector("aside") as HTMLDivElement;
    let addeddupdate: HTMLHeadingElement = document.querySelector("#addeddupdate") as HTMLHeadingElement;

    const myAccountUpdatesUrl = ref(database, localStorage.id + "/update_status");
    const myAccountUrl = ref(database, localStorage.id);

    addStatus.addEventListener("click", () => {
        let updatearray: string[] = [];
        // console.log(localStorage.email)
        // console.log(localStorage.id)

        //  console.log(myAccountUpdatesUrl.toString())
        //  console.log(myAccountUrl.toString())
        //  console.log(baseUrl.toString())

        if (statusUpdate.value == "") {
            return;
        }

        get(child(myAccountUrl, "/")).then((snapshot) => {
            const key = snapshot.key;
            const data = snapshot.val();
            let index: number;
            if (data.update_status == undefined) index = 0;
            else index = data.update_status.length;

            update(myAccountUpdatesUrl, { [index]: statusUpdate.value }).then(() => {
                console.log("updated!!!");
            });
        });
    });

    //display updatestatusar
    onValue(myAccountUrl, (snapshot) => {
        const key = snapshot.key;
        const data = snapshot.val();
        console.log("display: ", data.update_status);
        addeddupdate.innerHTML = data.update_status.join("<br>");
    });
    ///

    console.log(aside);

    LogOut.addEventListener("click", () => {
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        localStorage.removeItem("picChoice");
        localStorage.removeItem("id");
        return;
    });

    get(child(baseUrl, "/")).then((snapshot) => {
        console.log("get");

        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const latestIndex = childData.update_status.length - 1;
            let convertedUrl: string = "";

            if (childData.profile_picture == "pic1.jpg") convertedUrl = new URL("../images/pic1.jpg", import.meta.url).toString();
            else if (childData.profile_picture == "pic2.jpg") convertedUrl = new URL("../images/pic2.jpg", import.meta.url).toString();
            else if (childData.profile_picture == "pic3.jpg") convertedUrl = new URL("../images/pic3.jpg", import.meta.url).toString();

            // console.log("compare:   " + childData.username);
            // console.log(" jamfor:    " + childData.profile_picture);
            // console.log("statusuppdateringar:    " + childData.update_status[1]);
            // console.log("latestIndex:  "+latestIndex);

            // console.log(childKey);
            console.log(convertedUrl);

            let divUserContainer = document.createElement("div");
            divUserContainer.addEventListener("click", () => {
                //  alert("account on click!!!!");
                showOtherAccount(childData); // gå över till en annan sida
            });

            let userNameH3 = document.createElement("h3");
            userNameH3.innerHTML = childData.username;

            let profilePicture = document.createElement("img");
            profilePicture.src = convertedUrl;
            profilePicture.height = 85;

            let updateStatus = document.createElement("p");
            updateStatus.innerHTML = childData.update_status[latestIndex];

            divUserContainer.appendChild(profilePicture);
            divUserContainer.appendChild(userNameH3);
            divUserContainer.appendChild(updateStatus);
            aside.appendChild(divUserContainer);
        });
    });

    anvandare.innerHTML = localStorage.getItem("username") as string;

    mailaddress.innerHTML = localStorage.getItem("email")?.toString() ?? "error";

    profilePic.src = localStorage.getItem("picChoice") as string;

    deleteBtn.addEventListener("click", () => {
        if (confirm("are you sure?")) {
            remove(ref(getDatabase(), localStorage.getItem("id") as string));
            localStorage.removeItem("email");
            localStorage.removeItem("username");
            localStorage.removeItem("picChoice");
            localStorage.removeItem("id");
            showRegister();
        } else return;
    });
}

export function showRegister() {
    document.body.innerHTML = `<main>
    <!-- head -->
    <div id="header-data">
        <div class="profile">
            <!-- <h2>user</h2> -->
        </div>
        <div class="logo">
            <h1 id="home">Lvls</h1>
            <h2 id="topic">Register</h2>
            <a  id="login"> << go back to login</a>
        </div>
    </div>

    <!-- log in -->

    <div class="form-wrapper col">
        <div class="row">
        </div>
        <form id="login-form">
            <div class="inputs-div">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value="Baby" required />

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="Caddy" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="Mail" required />
            </div>
                <img class="choosePic" width="150px" src="../src/images/pic1.jpg" alt="pic1" >
            <input type="radio"  name="fav_language" value="pic1.jpg" required/>
              <label for="optionone">option 1</label><br />

             <img class="choosePic" width="150 px" src=".//images/pic2.jpg" alt="pic2">
            <input type="radio"  name="fav_language" value="pic2.jpg" required />
              <label for="optiontwo">option 2</label><br />

             <img class="choosePic" width="150 px" src=".//images/pic3.jpg" alt="pic3">
            <input type="radio" name="fav_language" value="pic3.jpg" required />
              <label for="optionthree">option 3</label><br />

             
            <!-- <input type="radio" id="javascript" name="fav_language" value="pic3.jpg" />
            <label for="javascript">option 3</label> -->
            <input type="submit" id="loginbutton" value="Create createAccount">
        </form>
    </div>
</main>
    `;

    let choospicImag = document.querySelectorAll(".choosePic") as NodeListOf<HTMLImageElement>;

    choospicImag[0].src = pic1URL.href;
    choospicImag[1].src = pic2URL.href;
    choospicImag[2].src = pic3URL.href;

    let registerBtn: HTMLButtonElement = document.querySelector("#loginbutton") as HTMLButtonElement;
    let loginBackBtn: HTMLButtonElement = document.querySelector("#login") as HTMLButtonElement;

    let username = document.querySelector("#username") as HTMLInputElement;

    let password = document.querySelector("#password") as HTMLInputElement;

    let email = document.querySelector("#email") as HTMLInputElement;

    let pictureChoice: HTMLInputElement;

    loginBackBtn.addEventListener("click", (e) => showInlogg());

    registerBtn.addEventListener("click", (e) => createAccount(e));

    async function createAccount(e: MouseEvent): Promise<void> {
        e.preventDefault();

        pictureChoice = document.querySelector("input[type = radio]:checked") as HTMLInputElement; // quary alternativen för att annars är det för tidigt

        const database = getDatabase();
        const referensAdress: DatabaseReference = ref(database, "/");

        console.log("pictureChoice: ", pictureChoice);

        if (username.value == "") {
            alert("username is required");
            return;
        }

        if (password.value == "") {
            alert("password is required");
            return;
        }

        if (email.value == "") {
            alert("email is required");
            return;
        }

        if (pictureChoice == null) {
            alert("no picture is required");
            return;
        }

        let cancelRegistering = false;

        await get(child(baseUrl, "/")).then((snapshot) => {
            console.log("get");

            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();

                console.log(username.value + "    compare:    " + childData.username);
                console.log(+" jamfor    " + childData.profile_picture);
                console.log(childData.update_status[1]);

                if (username.value == childData.username || email.value == childData.email) {
                    console.warn("Username/email Match");
                    cancelRegistering = true;
                }
            });
        });

        if (cancelRegistering) {
            alert("username / email is not unique");
            return;
        }

        localStorage.setItem(
            "id",
            push(referensAdress, {
                //skickar till databasen på firebase
                username: username.value, // inputHTmlElement  dennas värde
                email: email.value,
                password: password.value,
                profile_picture: pictureChoice.value,
                update_status: {
                    0: "beginning",
                    1: "end",
                },
            }).key as string
        );
        alert("account is registered");
        console.log("aregisteredcreateAccount");

        //gå till inlogg sidan
        let convertedUrl = new URL("inloggning.html", import.meta.url).toString();
        //let convertedUrl = new URL("othercreateAccount.html",import.meta.url).toString();

        console.log(pic1URL.href, pic2URL.href, pic3URL.href);
     

        localStorage.setItem("username", username.value);
        //localStorage.setItem('picChoice',pictureChoice.value);
        localStorage.setItem("email", email.value);

        if (pictureChoice.value == "pic1.jpg") {
            localStorage.setItem("picChoice", pic1URL.href);
        } else if (pictureChoice.value == "pic2.jpg") {
            localStorage.setItem("picChoice", pic2URL.href);
        } else {
            localStorage.setItem("picChoice", pic3URL.href);
        }

        
        //    Cookie.get('username'),
        //    Cookie.get('picChoice'),
        //    Cookie.get('email')
        //    );

        // main.style.display= 'none'; //gömma med css
        showMyAccount(); //);

    }
}

export function showInlogg() {
    document.body.innerHTML = `
    <form id="login-form">
    <div class="inputs-div">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="Mail" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value="Caddy" required />
    </div>

        <input type="submit" id="loginbutton" value="login">
    </form>
    <a id="registerLink"> >> dont have an createAccount?, register for free</a>

    `;

    let registerLink = document.getElementById("registerLink") as HTMLAnchorElement;
    registerLink.addEventListener("click", () => {
        showRegister();
    });

    let email = document.querySelector("#email") as HTMLInputElement;
    let password = document.querySelector("#password") as HTMLInputElement;
    let loginbutton = document.querySelector("#loginbutton") as HTMLInputElement;

    loginbutton?.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("input:", email.value, password.value);

        console.log(baseUrl.toString(), "baseURL");

        onValue(
            baseUrl,
            (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();

                    //console.log(childKey,childData);
                    console.log(childData.email, childData.password);

                    //"alrik"  let username= "alrik";
                    //  if ('alrik' ==username)
                    if (email.value == childData.email && password.value == childData.password) {
                        console.warn("allt är  MATCHING");

                        localStorage.setItem("id", childKey as string);

                        localStorage.setItem("username", childData.username);
                        //localStorage.setItem('picChoice',pictureChoice.value);
                        localStorage.setItem("email", childData.email);

                        if (childData.profile_picture == "pic1.jpg") {
                            localStorage.setItem("picChoice", pic1URL.href);
                        } else if (childData.profile_picture == "pic2.jpg") {
                            localStorage.setItem("picChoice", pic2URL.href);
                        } else {
                            localStorage.setItem("picChoice", pic3URL.href);
                        }

                        showMyAccount();
                    } else console.error("inget är MATCHING");
                });
            },
            {
                onlyOnce: true,
            }
        );
    });
}

export function showOtherAccount(childData: any) {
    console.clear();
    console.log(childData);

    document.body.innerHTML = `
    <header><h1>Lvls</h1></header>
        <nav>
            <ul>
                <li><a id="home" href="Home">Home</a></li>
                <li><a id="profilePage">Profile</a></li>
                <li><a href id="LogOut">LogOut</a></li>
            </ul>
        </nav>

        <aside>
        </aside>

        <main>
          <div>
            <img id="profilePic" width="300" src="/src/images/logo.png" alt="profilePic">
            <div>
              <h2 id="anvandare"> OTHER username </h2>
              <h2 id="mailaddress">OTHER email</h2>
            </div>
          </div>

          <div>
            <label for="status">Status uppdateringar</label>
            <ul id="statsupdate">
       
            </ul>
          </div>
        </main>


        <footer>

        </footer>
    `;

    let profilePic: HTMLImageElement = document.querySelector("#profilePic") as HTMLImageElement;
    let anvandare: HTMLHeadingElement = document.querySelector("#anvandare") as HTMLHeadingElement;
    let mailaddress: HTMLHeadingElement = document.querySelector("#mailaddress") as HTMLHeadingElement;
    let statsupdate: HTMLUListElement = document.querySelector("#statsupdate") as HTMLUListElement;
    let profilePage: HTMLAnchorElement = document.querySelector("#profilePage") as HTMLAnchorElement;
    profilePage.addEventListener("click", () => {
        showMyAccount();
    });
    console.log(anvandare, mailaddress, statsupdate, profilePic, profilePage);

    anvandare.innerHTML = childData.username;
    mailaddress.innerHTML = childData.email;

    let oneUpdate: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    oneUpdate.innerHTML = childData.update_status.join("<br>");
    statsupdate.appendChild(oneUpdate);

    profilePic.src = childData.profile_picture;

    if (childData.profile_picture == "pic1.jpg") {
        profilePic.src = pic1URL.href;
    } else if (childData.profile_picture == "pic2.jpg") {
        profilePic.src = pic2URL.href;
    } else if (childData.profile_picture == "pic3.jpg") {
        profilePic.src = pic3URL.href;
    }
}
