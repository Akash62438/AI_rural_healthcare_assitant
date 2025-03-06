import React, { useState } from "react";
import "./EmergencySOS.css";

const EmergencySOS = () => {
  const [location, setLocation] = useState(null);
  const [userNumber, setUserNumber] = useState("");

  // Get user location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`https://www.google.com/maps?q=${latitude},${longitude}`);
        },
        (error) => {
          alert("Unable to fetch location. Please enable location services.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Share on WhatsApp to the user-specified number
  const sendSOS = () => {
    getLocation();

    setTimeout(() => {
      if (!location) {
        alert("Fetching location, please wait...");
        return;
      }
      if (!userNumber) {
        alert("Please enter a valid mobile number.");
        return;
      }

      const message = `🚨 EMERGENCY SOS! 🚨\n\nLocation: ${location}`;
      const whatsappLink = `https://api.whatsapp.com/send?phone=${userNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
    }, 3000);
  };

  return (
    <div className="emergency-sos">
      <h1>Emergency SOS</h1>
      <p>Enter a mobile number and press the button below to send an emergency alert with your location.</p>
      
      <input
        type="tel"
        placeholder="Enter recipient's mobile number..."
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
      />
      
      <button className="sos-button" onClick={sendSOS}>Send SOS on WhatsApp</button>
    </div>
  );
};

export default EmergencySOS;
