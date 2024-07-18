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
const incorrectAnswerColor = "bg-red-500";
submitButton.addEventListener("click", submitForm);
RestartButton.addEventListener("click", StartAgain);

function userScoreBoard() {
  scoreContainer.classList.add("hidden");
  scoreBoard.classList.remove("hidden");
  inputid.classList.add("hidden");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // users.sort((a, b) => b.score - a.score);
  let usersListHTML = users.map(
    (user, index) => `
                <div class="flex justify-between items-center bg-gray-100 p-2 rounded">
                    <span>${index + 1}. ${user.currentUser}</span>
                    <span class="font-bold">${user.userScore}/5</span>
                </div>
            `
  );
  console.log(usersListHTML);
  let userListHTMLjoin = usersListHTML.join("");
  console.log(userListHTMLjoin);

  userscoreBoard.innerHTML = userListHTMLjoin;
}

function submitForm() {
  let username = inputName.value.trim();
  let quizUser = {
    currentUser: username,
    currentUserId: generateUniqueId(),
    currentQuestionindex: Questionindex,
    userScore: score,
  };
  quizUsers.push(quizUser);
  console.log("bbb", quizUsers);
  SecondContainer.classList.remove("hidden");
  inputid.classList.add("hidden");
  localStorage.setItem("name", username);
  localStorage1();
  DisplayQuestion(0);
}

function localStorage1() {
  localStorage.setItem("users", JSON.stringify(quizUsers));
}

function generateUniqueId() {
  return window.crypto.randomUUID();
}

function correctAnswer() {
  mainContainer.classList.replace(byDefaultColor, correctAnswerColor);
  mainContainer.classList.replace(incorrectAnswerColor, correctAnswerColor);
}

function inCorrectAnswers() {
  mainContainer.classList.replace(byDefaultColor, incorrectAnswerColor);
  mainContainer.classList.replace(correctAnswerColor, incorrectAnswerColor);
}

function StartAgain() {
  scoreContainer.classList.add("hidden");
  SecondContainer.classList.remove("hidden");
  mainContainer.classList.replace(correctAnswerColor, byDefaultColor);
  mainContainer.classList.replace(incorrectAnswerColor, byDefaultColor);
  score = 0;
  Questionindex = 0;
  DisplayQuestion(Questionindex);
  localStorage.setItem("score", 0);
}

const DisplayQuestion = (index) => {
  SecondContainer.innerHTML = "";

  if (index >= questions.length) {
    SecondContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreDispaly();
    return;
  }
  const currentQuestion = questions[index];
  console.log("hi", currentQuestion);
  const heading = document.createElement("h1");
  console.log(heading);
  heading.classList.add("bg-blue-400", "text-gray-200", "py-3", "text-2xl");
  heading.innerText = currentQuestion.question;
  SecondContainer.appendChild(heading);
  const divcontainor = document.createElement("div");

  currentQuestion.options.forEach((item) => {
    const button = document.createElement("button");
    button.classList.add(
      "btn",
      "bg-gray-100",
      "w-full",
      "space-y-3",
      "py-3",
      "px-3",
      "font-medium",
      "hover:bg-gray-300"
    );
    button.classList.add("space-y-3", "bg-gray-100");
    button.style.display = "flex";
    button.innerText = item;
    divcontainor.appendChild(button);
    SecondContainer.appendChild(divcontainor);
  });
  document.querySelectorAll(".btn").forEach(function (element) {
    element.addEventListener("click", () => {
      selectAnswere(element, currentQuestion, index);
    });
  });
};

function selectAnswere(element, currentQuestion, index) {
  const currentUsername = localStorage.getItem("name");
  const user = quizUsers.find((items) => items.currentUser === currentUsername);
  console.log("one", user, quizUsers);
  if (element.innerHTML === currentQuestion.answer) {
    score++;
    localStorage.setItem("score", score);
    correctAnswer();
  } else {
    inCorrectAnswers();
  }
  if (user) {
    user.userScore = score;
    user.currentQuestionindex = index + 1;
    localStorage1();
  }
  DisplayQuestion(index + 1);
}

// for scoreShow
function scoreDispaly() {
  head1.innerText = `your score is ${score} / ${questions.length} `;
  emoji.innerText = score >= 3 ? "🥳" : "😒";
}

function backToStart() {
  scoreContainer.classList.add("hidden");
  scoreBoard.classList.add("hidden");
  mainContainer.classList.replace(incorrectAnswerColor, byDefaultColor);
  mainContainer.classList.replace(correctAnswerColor, byDefaultColor);

  // SecondContainer.classList.add("hidden");
  inputid.classList.remove("hidden");
  inputName.value = "";
  reSetQuiz();
}
BackToStart.addEventListener("click", backToStart);

function reSetQuiz() {
  localStorage.setItem("score", 0);
  localStorage.setItem("name", "");
  score = 0;
  currentUser = "";
}

// DisplayQuestion(0);
