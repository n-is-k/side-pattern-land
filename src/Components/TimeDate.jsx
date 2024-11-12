import React from "react";
import { useState, useEffect } from "react";

function TimeDate() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="time-date">
      {/* {currentDateTime.toLocaleDateString()}{" "} */}
      {/* Displays date in local format */}
      {currentDateTime.toLocaleTimeString()}{" "}
      {/* Displays time in local format */}
    </div>
  );
}

export default TimeDate;
