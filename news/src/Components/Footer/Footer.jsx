import React, { useState, useEffect } from "react";
import './Footer.css'
function Footer() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date().toLocaleString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="footer">
        <div className="date">
          <h4>Current Date & Time is {time}</h4>
        </div>
       
      </div>
    </>
  );
}

export default Footer;
