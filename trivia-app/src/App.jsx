import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import DetailsScreen from "./components/DetailsScreen";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {

  const [screen, setScreen] = useState(
    localStorage.getItem("screen") || "start",
  );

  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || [],
  );

  const [score, setScore] = useState(
    Number(localStorage.getItem("score")) || 0,
  );

  const [name, setName] = useState(localStorage.getItem("name") || "");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("screen", screen);
    localStorage.setItem("questions", JSON.stringify(questions));
    localStorage.setItem("score", score);
    localStorage.setItem("name", name);
  }, [screen, questions, score, name]);

  const goToDetails = (userName) => {
    setName(userName);
    setScore(0);
    setScreen("details");
  };

  const startQuiz = async (userName, category, difficulty, amount) => {
    
    try {

      setError("");
      setLoading(true);
      
      setName(userName);
      setScore(0);

      const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

      const res = await fetch(url);
      const data = await res.json();

      setQuestions(data.results);
      setLoading(false);

      setScreen("quiz");
    }

    catch (err) {
      setError("Failed to fetch questions. Please try again.");
    }
    
    finally {
      setLoading(false);
    }
    
  };

  if(loading) {
    return (
      <div className="loading">
        <h2>Loading Questions...</h2>
      </div>
    );
  }

  if(error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {screen === "start" && <StartScreen goToDetails={goToDetails} />}

      {screen === "details" && (
        <DetailsScreen name={name} startQuiz={startQuiz} />
      )}

      {screen === "quiz" && (
        <Quiz
          questions={questions}
          score={score}
          setScore={setScore}
          setScreen={setScreen}
          name={name}
        />
      )}

      {screen === "result" && (
        <Result
          score={score}
          total={questions.length}
          name={name}
          setScreen={setScreen}
        />
      )}
    </div>
  );
}

export default App;
