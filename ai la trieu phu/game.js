const question = document.querySelector("#question");

const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
//  câu hỏi và câu trả lời để ở đây questions
let questions = [
  {
    question: "1./what is 2 + 2  ",
    choice: "2",
    choice2: "4",
    choice3: "6",
    choice4: "10",
    answer: 2,
  },
  {
    question: "2./what is 2+10  ",
    choice: "12",
    choice2: "4",
    choice3: "6",
    choice4: "10",
    answer: 1,
  },
  {
    question: "3./what is 2 + 50  ",
    choice: "2",
    choice2: "4",
    choice3: "52",
    choice4: "10",
    answer: 3,
  },
  {
    question: "4./what is 9+6  ",
    choice: "2",
    choice2: "4",
    choice3: "6",
    choice4: "15",
    answer: 4,
  },
];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  console.log("progressText.innerText", progressText.innerText);
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  console.log("progressBarFull.style.width", progressBarFull.style.width);
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  console.log(" questionsIndex", questionsIndex);
  currentQuestion = availableQuestions[questionsIndex];
  console.log("currentQuestion ", currentQuestion);
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionsIndex, 1);
  console.log(
    "available question",
    availableQuestions.splice(questionsIndex, 1)
  );

  acceptingAnswers = true;
};
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (acceptingAnswers) return
    acceptingAnswers = false;
    const selectedChoice = e.target

    console.log('selectedChoice:',selectedChoice);
    const selectedAnswer = selectedChoice.dataset["number"];

   console.log(' selectedAnswer:', selectedAnswer);

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
startGame();
