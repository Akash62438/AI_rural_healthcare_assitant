import React, { useState } from "react";
import "./SymptomChecker.css";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");

  const handleCheckSymptoms = () => {
    // Mock AI analysis (replace with actual AI integration)
    if (symptoms.toLowerCase().includes("fever")) {
      setResult("Possible conditions: Flu, Cold, or COVID-19. Please consult a doctor.");
    } else if (symptoms.toLowerCase().includes("cough")) {
      setResult("Possible conditions: Cold, Allergy, or Asthma. Drink warm water and rest.");
    } else {
      setResult("No specific condition detected. If symptoms persist, consult a doctor.");
    }
  };

  return (
    <div className="symptom-checker">
      <h1>Symptom Checker</h1>
      <p>Enter your symptoms below to get AI-driven health insights.</p>

      <div className="input-container">
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
        />
      </div>

      <button className="cta-button" onClick={handleCheckSymptoms}>
        Check Symptoms
      </button>

      {result && (
        <div className="result">
          <h2>Analysis Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;