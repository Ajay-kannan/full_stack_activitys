import React, { useContext, useEffect, useState } from "react";
import "./Alarm.css";
import { AlarmProvider } from "./contextProvider.js";

let daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function Alarm() {
  const { hour, minutes, amPm, dayNow, monthNow, yearNow } =
    useContext(AlarmProvider);
  let [alarmTime, setAlarmTime] = useState("");
  let [alarmType, setAlarmType] = useState("Once");
  let [day, setDay] = useState("");
  let [isAlarm, setisAlarm] = useState("false");

  useEffect(() => {
    let myInterval = setInterval(() => {
      let date = new Date();
      let HH = date.getHours(),
        MM = date.getMinutes();
      if (HH < 10) HH = `0${HH}`;
      if (MM < 10) MM = `0${MM}`;
      let orginalTime = HH + ":" + MM;
      switch (alarmType) {
        case "Once":
          if (isAlarm === "true" && day === daysInWeek[date.getDay()]) {
            if (alarmTime === orginalTime) {
              alert("it works");
              setisAlarm("false");
            }
          }
          break;
        case "Every":
          if (isAlarm === "true") {
            if (alarmTime === orginalTime) {
              alert("it works");
              setisAlarm("false");
            }
          }
          break;
        default:
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="Clock">
      <div className="clock_text">
        <div className="hour">{`${hour}:`}</div>
        <div className="minutes">{minutes}</div>
        <div className="ampm">{amPm}</div>
      </div>
      <div>
        <div className="clock__date">
          <span>{`${dayNow} `}</span>
          <span>{`${monthNow} , `}</span>
          <span>{yearNow}</span>
        </div>
      </div>

      <div>
        <label>Set Alarm time</label>
        <input
          type="time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          {daysInWeek.map((day, index) => {
            return (
              <option key={index} value={day}>
                {day}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          value={alarmType}
          onChange={(e) => setAlarmType(e.target.value)}
        >
          <option value="Once">Once</option>
          <option value="Every">Every Day</option>
        </select>
      </div>
      {isAlarm === "false" ? (
        <button
          className="btn1"
          onClick={() => {
            setisAlarm("true");
          }}
        >
          Set Alarm
        </button>
      ) : (
        <button
          className="btn-r"
          onClick={() => {
            setisAlarm("false");
          }}
        >
          Clear Alarm
        </button>
      )}
    </div>
  );
}

export default Alarm;
