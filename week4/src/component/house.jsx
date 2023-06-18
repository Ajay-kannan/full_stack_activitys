import { useState } from "react";
import "./house.css";

function House() {
  const [salary, setsalary] = useState("");
  const [saving, setsaving] = useState("");
  const [cost, setcost] = useState("");
  const [result, setresult] = useState("");
  function calculate() {
    let monthSalary = salary / 12;
    let savingamount = monthSalary * saving;
    let downpayment = (cost / 100) * 25;
    setresult(Math.ceil(downpayment / savingamount));
  }
  return (
    <div className="app">
      <div>
        <h1>house</h1>
        <label>annual salary</label>
        <input
          type="number"
          onChange={(e) => setsalary(e.target.value)}
          value={salary}
        />
        <br />
        <label>saving</label>
        <input
          type="number"
          onChange={(e) =>
            e.target.value <= 1 && e.target.value >= 0
              ? setsaving(e.target.value)
              : setsaving("")
          }
          value={saving}
        />
        <br />
        <label>cost of home</label>
        <input
          type="number"
          onChange={(e) => setcost(e.target.value)}
          value={cost}
        />
        <br />
        <center>
          <button onClick={calculate}>submit</button>
        </center>
        <center style={{ marginTop: "20px" }}>
          <h1>Month : {result}</h1>
        </center>
      </div>
    </div>
  );
}
export default House;
