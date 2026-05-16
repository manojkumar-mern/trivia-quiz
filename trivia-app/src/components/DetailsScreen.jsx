import { useState, useEffect } from "react";
import brain from "../assets/brain.png";

const DetailsScreen = ({ name, startQuiz }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
      
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  return (
    <div className="start-wrapper">
          
      <div className="left-image">
        <img src={brain} alt="brain" style={{ maxWidth: "250px" }} />
      </div>

      <div className="right-form">
        <h2>Hey {formattedName}!</h2>

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <select onChange={(e) => setAmount(e.target.value)}>
          {[5, 10, 15, 20, 25, 30].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <button
          disabled={!category}
          onClick={() => startQuiz(name, category, difficulty, amount)}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default DetailsScreen;
