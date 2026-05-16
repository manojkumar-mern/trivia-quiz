Trivia Quiz App

A responsive and interactive Trivia Quiz Application built using React (Vite).
This project allows users to enter their name, choose quiz settings, attempt questions, and view their final score with personalized feedback.

Features:

    User name input
    Category selection
    Difficulty levels (Easy, Medium, Hard)
    Select number of questions
    Randomized answer options
    Score tracking
    Result screen with performance message
    Play again / Restart functionality
    Responsive UI (mobile + desktop)

Tech Stack
    React (Vite)
    JavaScript (ES6+)
    CSS3 (Flexbox)
    Open Trivia API

 API Used
    https://opentdb.com/

Example:
    https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple

Project Structure
 
    trivia-app/
│
├── src/
│   ├── assets/       # Images
│   ├── components/
│   │   ├── StartScreen.jsx
│   │   ├── DetailsScreen.jsx
│   │   ├── Quiz.jsx
│   │   ├── Result.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js

Installation & Setup

1. Extract the zip file

2. Open terminal inside project folder

3. Install dependencies:
npm install

4. change directory
cd trivia-app

5. Run the app:
npm run dev

6. Open in browser:
http://localhost:5173

Author:
    Manoj Kumar D
