let data = {
    1: {
        place : "chennai",
        item : 15
    },
    2: {
        place : "coimbatore",
        item : 12
    },
    3: {
        place : "madurai",
        item : 12
    },
    4: {
        place : "salem",
        item : 8
    },
    5: {
        place : "tiruchirappalli",
        item : 6
    },
    6: {
        place : "thoothukudi",
        item : 2
    }
}


function getcity() {
    let item = document.getElementById("item");
    let city = document.getElementById("place");
    let result = document.getElementById("result");
    let value = city.value;
    let flag = 0;
    if(item.value <= 0)
    return;

    for (let i in data)
{
    if(data[i].item >= parseInt(item.value) && data[i].place == value )
    {
        flag = 1;
        sendmessage(item.value , data[i].place);
    }
}

if(flag == 1)
result.innerHTML = "order placed"
else{
result.innerHTML = "item is not avaiable ";
let message = document.getElementById("message")
    message.innerText = "";
}
}


function sendmessage(item, place){
    let message = document.getElementById("message")
    message.innerText = "";
    let p = document.createElement("h1");
    let i = document.createElement("h4");
    i.innerText = "number of item : " + item;
    p.innerText = "place : " + place;
message.appendChild(p);
message.appendChild(i);

}


