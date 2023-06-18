import "./cookie.css";
import Blueberry from "./Blueberry.jpg";
import Chocolate from "./Chocolate.jpg";
import { useState } from "react";
function Cookie() {
  const [berry, setberry] = useState(50);
  const [choco, setchoco] = useState(30);
  return (
    <div id="container">
      <div>
        <center>
          {" "}
          <img src={Blueberry} alt="blueberry" />
          <h1>available : {berry}</h1>
          <h1>items sold : {50 - berry}</h1>
          <button
            onClick={(e) => {
              setberry(berry - 1);
            }}
          >
            Buy
          </button>
        </center>
      </div>
      <div>
        <center>
          {" "}
          <img src={Chocolate} alt="chocolate" />
          <h1>available : {choco}</h1>
          <h1>items sold : {30 - choco}</h1>
          <button
            onClick={(e) => {
              setchoco(choco - 1);
            }}
          >
            Buy
          </button>
        </center>
      </div>
    </div>
  );
}
export default Cookie;
