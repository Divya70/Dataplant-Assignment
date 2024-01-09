import React, { useState } from "react";
import { useTime } from "../Context";

const TimeDropdown = () => {
  // State to manage the selected time
  // const [selectedTime, setSelectedTime] = useState("");
  const {timeState, setTimeState}=useTime()

  // Array of time options
  const timeOptions = [
    "12:00 AM",
    "12:30 AM",
    "01:00: AM",
    "01:30 AM",
    "02:00 AM",
    "02:30 AM",
    "03:00 AM",
    "03:30 AM",
    "04:00 AM",
    "04:30 AM",
    "05:00 AM",
    "05:30 AM",
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  // Event handler for when a time is selected
  const handleTimeChange = (event) => {
    setTimeState(event.target.value);
  };

  return (
    <div>
      <label>Time:</label>
      <select value={timeState} onChange={handleTimeChange}>
        <option value="10:00 AM" disabled>
          10:00 AM
        </option>
        {timeOptions.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeDropdown;
