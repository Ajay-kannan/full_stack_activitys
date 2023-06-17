const display = document.getElementById("display");
let firstvalue;
let sym ;
function setNum(e)
{
    display.value += e.innerText;
}

function setOpd(e) {
    firstvalue = display.value;
    sym = e.innerText;
    display.value = "";
}

function equal()
{
let secvalue = display.value;
let result = eval(firstvalue + sym + secvalue);
display.value = result;
}

function clearx()
{
    display.value = "";
}

function setsqrt() {
    display.value = Math.sqrt(display.value);
}

function setlog() {
    display.value = Math.log10(display.value);
}

function setpow(e) {
    firstvalue = display.value;
    sym = "**";
    display.value = "";
    
}

function setdeg(e)
{
    if(e.innerText == "sin")
    {
    display.value = Math.sin(display.value);
    }
    else if(e.innerText == "cos")
    {
    display.value = Math.cos(display.value);
    }
    else if(e.innerText == "tan")
    {
        display.value = Math.tan(display.value);
    }
}
function setrnd() {
    display.value = Math.round(display.value);
    
}

function setabs() {
    display.value = Math.abs(display.value);
    
}

function del() {
    display.value = (display.value).slice(0,-1);
}

function setdot() {
    display.value = (display.value) + ".";
    
}