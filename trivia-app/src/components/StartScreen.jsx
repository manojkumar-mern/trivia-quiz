import { useState } from "react";
import learning from "../assets/learning.png"; 

const StartScreen = ({ goToDetails }) => {
  const [name, setName] = useState("");

  return (
    <div className="start-wrapper">
      <div className="left-form">
        <h1>Hey there!</h1>
        <h1>Welcome to Trivia!</h1>

        <p>
          We're so happy you're here. Let's get started and make this journey
          fun!
        </p>

        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button disabled={!name.trim()} onClick={() => goToDetails(name)}>
          Let's Go
        </button>
      </div>

      <div className="start-image">
        <img src={learning} alt="learning" />
      </div>
    </div>
  );
};

export default StartScreen;
