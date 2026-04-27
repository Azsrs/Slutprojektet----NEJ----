let cart = document.querySelector("#cart");
let cartlist = [];
const nyckel ="ru";


function KÖP(){
    console.log("ru");
    cartlist.push("Sko")
    

       let json = JSON.stringify(cartlist);
       window.localStorage.setItem(nyckel, json);
       Läsin()
    
}

function Läsin() {
    cart.innerHTML="";
    let key = window.localStorage.getItem(nyckel);
    let cartlist2 = JSON.parse(key);

    for (let index = 0; index < cartlist.length; index++) {
        const element = cartlist[index];
        let li = document.createElement("li");
        li.textContent= element.textContent;
        cart.appendChild(li);
    }
}