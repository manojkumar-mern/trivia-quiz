import { useState, useEffect, use } from "react";

const Quiz = ({ questions, score, setScore, setScreen, name }) => {
  const [currentQ, setCurrentQ] = useState(
    Number(localStorage.getItem("currentQ")) || 0 );
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem("answers")) || [] );
  const [options, setOptions] = useState([]);

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  const question = questions[currentQ];

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  useEffect(() => {
    if (!question) return;

    const shuffled = [
      ...question.incorrect_answers,
      question.correct_answer,
    ].sort(() => Math.random() - 0.5);

    setOptions(shuffled);
    setSelected(answers[currentQ] || null);
  }, [currentQ, question]);

  const handleNext = () => {
    if (!selected) return;

    const updated = [...answers];
    updated[currentQ] = selected;
    setAnswers(updated);

    // if (selected === question.correct_answer) {
    //   setScore((prev) => prev + 1);
    // }

    setCurrentQ((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQ((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (!selected) return;

    const updated = [...answers];
    updated[currentQ] = selected;
    setAnswers(updated);

    // if (selected === question.correct_answer) {
    //   setScore((prev) => prev + 1);
    // }

    let finalScore = 0;

    updated.forEach((ans, index) => {
      if (ans === questions[index].correct_answer) {
        finalScore++;
      }
    });

    setScore(finalScore);
    
    setScreen("result");
  };

  useEffect(() => {
    localStorage.setItem("currentQ", currentQ);
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [currentQ, answers]);

  if (!question) return null;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <h2>{formattedName}'s Quiz</h2>

        <p>{decodeHTML(question.question)}</p>

        <h4>Question {currentQ + 1}</h4>

        {options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn ${selected === opt ? "active" : ""}`}
            onClick={() => setSelected(opt)}
          >
            {decodeHTML(opt)}
          </button>
        ))}

        <div className="quiz-buttons">
          {currentQ > 0 && (
            <button className="secondary" onClick={handlePrevious}>
              Previous
            </button>
          )}

          {currentQ < questions.length - 1 ? (
            <button onClick={handleNext} disabled={!selected}>
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} disabled={!selected}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
