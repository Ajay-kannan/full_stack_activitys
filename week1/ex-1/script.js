
let pizza = [
    {type : "Small" , price : 99},
    {type : "Medium" , price : 199},
    {type : "Large" , price : 399}

]

let extra = {
    1 : {type : "mushrooms" , price : 15},
    2 : {type : "olives" , price : 10},
    3 : {type : "fingernail" , price : 30},
    4 : {type : "spicy beef" , price : 25}
}

let addOn = {
    1 : {type : "deepPan" , price : 20 },
    2 : {type : "delivery", price : 25}
}



let root = document.getElementById("root");
function createoption() {
    let optiondiv = document.createElement("div");
    optiondiv.classList = "optionlist";
    for (let i = 1; i < 5; i++)
   {
      let inputfield = document.createElement("input");
      inputfield.type = "checkbox"
      inputfield.value = extra[i].type;
      inputfield.id = extra[i].type;
      let optionfield = document.createElement("label");
      optionfield.innerText = extra[i].type + " - Rs: " + extra[i].price;
      optionfield.value = extra[i].type; 
      optiondiv.appendChild(inputfield);
      optiondiv.appendChild(optionfield);

   }
   return optiondiv;

}

function createaddon()
{
    let adddiv = document.createElement("div");
    for(let i=1; i<3; i++)
    {
        let inputfield = document.createElement("input");
      inputfield.type = "checkbox"
      inputfield.value = addOn[i].type;
      inputfield.id = addOn[i].type;
      let optionfield = document.createElement("option");
      optionfield.innerText = addOn[i].type + "  -  Rs:" + addOn[i].price;
      optionfield.value = addOn[i].type; 
      optionfield.className = "optionstatus";
      adddiv.appendChild(inputfield);
      adddiv.appendChild(optionfield);
    }

    return adddiv;
}

pizza.forEach(element => {
let div = document.createElement("div");
let h1 = document.createElement("h1");
let img = document.createElement("img");
let addcardbtn = document.createElement("button");
   img.src = "pizza.png"
   img.id = "pizzaimg"
   h1.textContent = element.type + " - Rs:"+ element.price;
   addcardbtn.textContent = "Add cart"
   addcardbtn.className = 'addcard'
   div.appendChild(h1);
   div.appendChild(img);
   div.appendChild(createoption()) ;
   div.appendChild(createaddon());
   div.appendChild(addcardbtn);
   div.classList = "cardlist";
   root.appendChild(div);
});

function checkstatus()
{
    let optionstatus = document.querySelectorAll(".optionstatus");
    for(let i=0; i<3; i++)
    {
        
    }
}

document.getElementsByClassName("addcard")[0].addEventListener("click",function func() {
checkstatus();

}
);

document.getElementsByClassName("addcard")[1].addEventListener("click",function func() {
    console.log("ok");
}
);

document.getElementsByClassName("addcard")[2].addEventListener("click",function func() {
    console.log("ok");
}
);