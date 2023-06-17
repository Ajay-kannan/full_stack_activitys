 let unit = document.getElementById("unitvalue");

function calculate()
{
let amount = 0;
let sub = 0;
let fix = 50;
let unitvalue = unit.value;
document.getElementById("value1").innerHTML = unitvalue;
if(unitvalue < 100)
amount = 0 ;
else if(unitvalue > 100)
amount += (unitvalue-100) * 3.75 + 100 ;
else if(unitvalue > 350)
amount += (unitvalue - 100) * 4 + 250 ;
else if(unitvalue > 450)
amount += (unitvalue - 100) * 4.25 + 300;
else if(unitvalue < 600)
amount += (unitvalue - 100) * 5 + 400;
else
amount += unitvalue * 5 + 400;

document.getElementById("value2").innerHTML = amount;
document.getElementById("value3").innerHTML = amount;
document.getElementById("value6").innerHTML = "50.0";
document.getElementById("value4").innerHTML = "0.0";
if(unitvalue > 100)
sub = 250,document.getElementById("value5").innerHTML = "250";

document.getElementById("value7").innerHTML = amount-sub+fix;


}