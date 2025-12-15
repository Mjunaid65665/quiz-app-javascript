const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "venius", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Leo Tolstoy", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O2", correct: false },
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
    ],
  },
];
const question = document.querySelector(".question");
const answersbtn = document.querySelector(".answers");
const nextbtn = document.querySelector(".nextbtn button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetstate();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    console.log(answer);

  });
}
function resetstate() {
  nextbtn.style.display = "none";
  while (answersbtn.firstChild) {
    answersbtn.removeChild(answersbtn.firstChild);
  }
}
function showScore() {
  question.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextbtn.innerHTML = "Play Again";
  nextbtn.style.display = "block";
  nextbtn.addEventListener("click", startQuiz);
}
function selectAnswer(e) {
  const slectedans = e.target;
  const isCorrect = slectedans.dataset.correct === "true";
  if (isCorrect) {
    slectedans.classList.add("correct");
    score++;
  } else {
    slectedans.classList.add("incorrect");
  }
    Array.from(answersbtn.children).forEach((button) => {   
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }else{
      button.classList.add("incorrect");
    }
    button.disabled = true;
  });
    nextbtn.style.display = "block";
}
nextbtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
});
startQuiz();
