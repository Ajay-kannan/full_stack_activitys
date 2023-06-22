function automatic() {
  document.getElementById("createinput").innerText = "";
  document.getElementById("result").innerText = "";
  let div = document.createElement("div");
  let btn = document.createElement("button");
  btn.textContent = "submit";
  btn.className = "btn1";
  btn.addEventListener("click", () => showresult());
  div.appendChild(btn);
  document.getElementById("createinput").appendChild(div);
}

function manual() {
  document.getElementById("createinput").innerText = "";
  let marks = document.getElementById("marks").value;
  let internalMarks = document.getElementById("internal").value;
  document.getElementById("result").innerText = "";
  createInputfield();
}

function showresult() {
  let external;
  let internal;
  if (
    document.querySelector("input[name = type]:checked").value === "Automatic"
  ) {
    external = 60;
    internal = 40;
  } else {
    external = document.getElementById("external1").value;
    internal = document.getElementById("internal1").value;
  }
  document.getElementById("result").innerText = "";
  let marks = document.getElementById("marks").value;
  let internalMarks = document.getElementById("internal").value;
  let grade = (marks * external) / 100 + (internalMarks * internal) / 100;
  let div = document.createElement("div");
  let ex = document.createElement("p");
  let int = document.createElement("p");
  let ans = document.createElement("p");

  ex.innerText = `External ${external}`;
  int.innerText = `Internal ${internal}`;
  let g = getgrade(grade);
  ans.innerText = `Grade ${g}`;
  div.appendChild(ex);
  div.appendChild(int);
  div.appendChild(ans);
  document.getElementById("result").appendChild(div);
}

function createInputfield() {
  let div = document.createElement("div");
  let int = document.createElement("input");
  let ex = document.createElement("input");
  let btn = document.createElement("button");

  int.id = "internal1";
  ex.id = "external1";
  int.placeholder = "Enter Internal Percentage";
  ex.placeholder = "Enter External percentage";
  btn.textContent = "submit";
  btn.className = "btn1";
  btn.addEventListener("click", () => showresult());
  div.appendChild(ex);
  div.appendChild(int);
  div.appendChild(btn);
  document.getElementById("createinput").appendChild(div);
}

function getgrade(m) {
  m = Number(m);
  if (m > 50 && m <= 60) return "B";
  else if (m > 60 && m <= 70) return "B+";
  else if (m > 70 && m <= 80) return "A";
  else if (m > 80 && m <= 90) return "A+";
  else if (m > 90 && m <= 100) return "O";
  else return "U";
}
