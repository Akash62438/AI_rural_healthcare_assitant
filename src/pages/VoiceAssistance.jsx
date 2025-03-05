import React from "react";
import "./VoiceAssistance.css";

const VoiceAssistance = () => {
  return (
    <div className="voice-assistance">
      <h1>Voice-Activated Assistance</h1>
      <p>
        Navigate the app using voice commands. Simply say what you need, and our AI will guide you.
      </p>
      <button className="cta-button">Try Voice Commands</button>
    </div>
  );
};

export default VoiceAssistance;