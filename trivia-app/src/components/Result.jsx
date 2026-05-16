const Result = ({ score, total, name, setScreen }) => {

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  const percentage = (score / total) * 100;

  let message = "";

  if (percentage === 100) {
    message = `WOW! You are a Genius ${formattedName}!!`;
  } else if (percentage > 80) {
    message = `Great Job ${formattedName}!`;
  } else if (percentage >= 50) {
    message = `You could do better ${formattedName}`;
  } else {
    message = `Oh No! You need some groundwork ${formattedName}!`;
  }

  return (
    <div className="result-wrapper">
          
      <div className="result-card">
        <h1 className="result-title">
          {percentage === 100 ? "WOW!" : "Result"}
        </h1>

        <h2 className="result-message">{message}</h2>

        <p className="result-score">
          Your Score: {score}/{total}
        </p>

        <p className="result-text">Ready to take on another challenge?</p>

        <div className="result-buttons">
                  
          <button
            className="secondary"
            onClick={() => {
              localStorage.clear();
              setScreen("start");
            }}
          >
            Back to Home
          </button>

          <button
            onClick={() => {
              localStorage.clear();
              setScreen("details");
            }}
          >
            Play Again
          </button>
        </div>
      </div>
          
    </div>
  );
};

export default Result;
