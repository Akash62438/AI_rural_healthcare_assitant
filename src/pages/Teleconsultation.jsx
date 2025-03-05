import React, { useState } from "react";
import "./Teleconsultation.css";

const Teleconsultation = () => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBookConsultation = () => {
    alert(`Consultation booked with ${doctor} on ${date} at ${time}.`);
  };

  return (
    <div className="teleconsultation">
      <h1>Teleconsultation</h1>
      <p>Book a video/audio consultation with a doctor.</p>

      <div className="form-container">
        <div className="input-container">
          <label htmlFor="doctor">Select Doctor</label>
          <select id="doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">Choose a doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Select a date"
          />
        </div>

        <div className="input-container">
          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Select a time"
          />
        </div>

        <button className="cta-button" onClick={handleBookConsultation}>
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Teleconsultation;
