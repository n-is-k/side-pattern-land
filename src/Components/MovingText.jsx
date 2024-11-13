import React, { useEffect, useState } from "react";
import "../css/MovingText.css";

const MovingText = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        hour12: false,
        timeZone: "Europe/Berlin", // CET/CEST timezone
      }).format(now);

      // Define open and close hours in 24-hour format
      const openingHour = 9; // 9:00 AM CET
      const closingHour = 18; // 5:00 PM CET

      // Update `isOpen` state based on current time
      setIsOpen(currentHour >= openingHour && currentHour < closingHour);
    };

    // Initial check
    checkOpenStatus();

    // Set interval to check every minute
    const interval = setInterval(checkOpenStatus, 60000); // Check every 60 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only on mount

  // Update text based on `isOpen` state
  const displayText = isOpen
    ? "The office is currently open"
    : "The office is currently closed";

  return <div className="moving-text">{displayText}</div>;
};

export default MovingText;
