import "./gotaxi.css";
import React, { useEffect, useState } from "react";

const Result = ({ total, searchInput, searchInput1, randomid }) => {
  return (
    <>
      <h1>total cost : {total}</h1>
      <div className="rid">
        from : {searchInput}
        <br />
        to : {searchInput1}
        <br />
        Travel id : {randomid}
      </div>
    </>
  );
};

const Gotaxi = () => {
  let places = [
    "chennai",
    "vellore",
    "kanchipuram",
    "ranipet",
    "thiruvanamalai",
    "bangalore",
    "madurai",
  ];
  let carprice = { hatchback: 15, sedan: 25, SUV: 30 };
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState([]);
  const [searchInput1, setSearchInput1] = useState("");
  const [result1, setResult1] = useState([]);
  const [cartype, setCartype] = useState("hatchback");
  const [kms, setkms] = useState(0);
  const [total, setTotal] = useState(0);
  const [randomid, setrandomid] = useState("");
  let [eff, seteff] = useState(0);
  let [date, setdate] = useState(new Date());
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    handleresult(e.target.value);
  };

  const handleChange1 = (e) => {
    setSearchInput1(e.target.value);
    handleresult1(e.target.value);
  };

  function handleresult(search) {
    let newResult = places.filter((place) => {
      return search && place.toLocaleLowerCase().includes(search);
    });
    setResult(newResult);
  }

  function handleresult1(search) {
    let newResult = places.filter((place) => {
      return search && place.toLocaleLowerCase().includes(search);
    });
    setResult1(newResult);
  }

  useEffect(() => {
    let radnum = Math.floor(Math.random() * 50);
    if (eff === 0 || searchInput === "" || searchInput1 === "") setkms(0);
    else setkms(radnum);
  }, [eff]);

  function handleCarType(e) {
    setCartype(e.target.value);
  }
  function handleeff(e) {
    console.log(eff);
    seteff(eff + 1);
  }
  function calculate() {
    let selectcar = carprice[cartype];
    let totalamount = selectcar * kms;
    setTotal(totalamount);
    getRandomid();
  }

  function getRandomid() {
    let idresult = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let idcounter = 0;
    while (idcounter < 10) {
      idresult += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
      idcounter += 1;
    }
    setrandomid(idresult);
  }

  useEffect(() => {
    var timer = setInterval(() => setdate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className="App">
      {total ? (
        <Result
          total={total}
          randomid={randomid}
          searchInput={searchInput}
          searchInput1={searchInput1}
        />
      ) : (
        <div className="line">
          <h1> Go Taxi</h1>
          <label>from</label>
          <input
            type="search"
            placeholder="Search here"
            onChange={(e) => handleChange(e)}
            value={searchInput}
            onBlur={handleeff}
          ></input>
          <div>
            {result.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSearchInput(item);
                    setResult([]);
                  }}
                >
                  {" "}
                  {item}
                </div>
              );
            })}
          </div>
          <label>to</label>
          <input
            type="search"
            placeholder="Search here"
            onChange={(e) => handleChange1(e)}
            value={searchInput1}
            onBlur={handleeff}
          />
          <div>
            {result1.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSearchInput1(item);
                    setResult1([]);
                  }}
                >
                  {" "}
                  {item}
                </div>
              );
            })}
          </div>

          <label>type</label>
          <select value={cartype} onChange={handleCarType}>
            <option value="hatchback">hatchback</option>
            <option value="sedan">sedan</option>
            <option value="SUV">SUV</option>
          </select>
          <br />
          <label>Date and Time</label>
          <input
            value={date.toLocaleDateString() + "  " + date.toLocaleTimeString()}
            disabled
          />
          <br />

          <label>Total KMS</label>
          <input placeholder="kms" value={kms} disabled />
          <br />
          <center>
            <button className="btn" onClick={calculate}>
              submit
            </button>
          </center>
        </div>
      )}
    </div>
  );
};

export default Gotaxi;
