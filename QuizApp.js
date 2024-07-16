const questions = [
  {
    question: "What is the capital of France? 🇫🇷",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet? 🪐",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth? 🌊",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "Which country is famous for sushi? 🍣",
    options: ["China", "Japan", "Korea", "Thailand"],
    answer: "Japan",
  },
  {
    question: "What is the boiling point of water? 💧",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
  },
];


 let Questionindex = 0;
 let score = 0;
 let quizUsers = JSON.parse(localStorage.getItem("quizUser")) || [];

 if (localStorage.getItem("users")) {
   quizUsers = JSON.parse(localStorage.getItem("users"));
 }

 if (localStorage.getItem("score")) {
   score = parseInt(localStorage.getItem("score"));
 }

 const inputid = document.getElementById("input");
 const inputName = document.getElementById("userName");
 const submitButton = document.getElementById("submitbtn");
 const mainContainer = document.getElementById("container");
 const SecondContainer = document.getElementById("SecondContainer");
 const scoreContainer = document.getElementById("scoreContainer");
 const head1 = document.querySelector("h1");
 const emoji = document.getElementById("emoji");
 const RestartButton = document.getElementById("restart");
 const scoreBoard = document.getElementById("score-board");
 const BackToStart = document.getElementById("Back-to-start");
 const userscoreBoard = document.getElementById("userScoreBoard");
 const scoreButton = document.getElementById("scorebutton");
 const scorebutton1 = document.getElementById("scorebutton1");

 scoreButton.addEventListener("click", userScoreBoard);
 scorebutton1.addEventListener("click", userScoreBoard);

 // backGround color
 const byDefaultColor = "bg-blue-100";
 const correctAnswerColor = "bg-green-700";
//  const incorrectAnswerColor = "bg-red-500";
