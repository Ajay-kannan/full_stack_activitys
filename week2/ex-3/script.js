const stationery = {
    1 : {name : "Four-line notebook", stock : 3},
    2 : {name : "two - line notebook", stock : 10},
    3 : {name : "Hb pencil", stock : 8},
    4 : {name : "Eraser", stock : 3},
    5 : {name : "Drawing Notebook", stock : 5}
}
let stock1 =document.getElementById("stock1");
let stock2 =document.getElementById("stock2");
let stock3 =document.getElementById("stock3");
let stock4 =document.getElementById("stock4");
let stock5 =document.getElementById("stock5");

function error()
{
    swal(
        "hey !",
        "stock not available",
         "error",
      );
}

function ok() {
    swal(
        "hey !",
        "Your order placed",
         "success",
      );
      setdefaultvalue();
      cartdisplay();
}

let defaultvalue = {};

function setdefaultvalue() {
    defaultvalue = {
        
            1 : {name : "Four-line notebook", stock : 0,price : 15},
            2 : {name : "two - line notebook", stock : 0,price : 10},
            3 : {name : "Hb pencil", stock : 0,price : 5},
            4 : {name : "Eraser", stock : 0,price : 2},
            5 : {name : "Drawing Notebook", stock : 0,price : 20}
        
    }
}
setdefaultvalue();
function cartdisplay()
{
    let result = "";
    let amount = 0;
  for (let i in stationery){
    if(defaultvalue[i].stock != 0){
       result += defaultvalue[i].name + "  " + defaultvalue[i].stock + "\n";
        amount += defaultvalue[i].stock * defaultvalue[i].price;
    }
    console.log(result);
       
  }
  document.getElementById("data").innerText = result;
}

function display()
{
   stock1.innerText = stationery[1].stock
   stock2.innerText = stationery[2].stock
   stock3.innerText = stationery[3].stock
   stock4.innerText = stationery[4].stock
   stock5.innerText = stationery[5].stock
}

display();

function addcart(value)
{
    if (value == 1)
    {
        if (stationery[1].stock !=0)
        {
            stationery[1].stock = stationery[1].stock-1;
            defaultvalue[1].stock += 1;
            cartdisplay();
        }
        else
        error();
    }
    else if (value == 2)
    {
        if (stationery[2].stock !=0)
        {
            defaultvalue[2].stock += 1;

            stationery[2].stock = stationery[2].stock-1;

            cartdisplay();
        }
        else
        error();
    }
   else if (value == 3)
    {
        if (stationery[3].stock !=0)
        {
            defaultvalue[3].stock += 1;

            stationery[3].stock = stationery[3].stock-1;
            cartdisplay();
        }
        else
        error();
    }
    else if (value == 4)
    {
        if (stationery[4].stock !=0)
        {
            defaultvalue[4].stock += 1;

            stationery[4].stock = stationery[4].stock-1;
            cartdisplay();
        }
        else
        error();
    } 
    else if (value == 5)
    {
        if (stationery[5].stock !=0)
        {
            defaultvalue[5].stock += 1;

            stationery[5].stock = stationery[5].stock-1;
            cartdisplay();
        }
        else
        error();
    }

    display();

}