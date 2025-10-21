const trivia = [
  {
    subject: "Convert $11011_2$ to base 10.",
    answers: [
      { answer: "25", value: false },
      { answer: "27", value: true },
      { answer: "29", value: false },
      { answer: "31", value: false },
    ],
  },
  {
    subject: "Simplify $2^{-3} \\times 4^2$.",
    answers: [
      { answer: "2", value: true },
      { answer: "1/2", value: false },
      { answer: "4", value: false },
      { answer: "1/4", value: false },
    ],
  },
  {
    subject: "If $\\log_2 x = 3$, find x.",
    answers: [
      { answer: "6", value: false },
      { answer: "8", value: true },
      { answer: "9", value: false },
      { answer: "16", value: false },
    ],
  },
  {
    subject: "Simplify $\\sqrt{75} - \\sqrt{27}$.",
    answers: [
      { answer: "$2\\sqrt{3}$", value: true },
      { answer: "$3\\sqrt{3}$", value: false },
      { answer: "$4\\sqrt{3}$", value: false },
      { answer: "$5\\sqrt{3}$", value: false },
    ],
  },
  {
    subject: "Solve for x: $3x + 7 = 19$.",
    answers: [
      { answer: "3", value: false },
      { answer: "4", value: true },
      { answer: "5", value: false },
      { answer: "6", value: false },
    ],
  },
  {
    subject: "Find the value of x in the equation $x^2 - 5x + 6 = 0$.",
    answers: [
      { answer: "x = 2 or x = 3", value: true },
      { answer: "x = -2 or x = -3", value: false },
      { answer: "x = 1 or x = 6", value: false },
      { answer: "x = -1 or x = -6", value: false },
    ],
  },
  {
    subject: "If $2x + y = 7$ and $x - y = 2$, find the value of y.",
    answers: [
      { answer: "1", value: true },
      { answer: "2", value: false },
      { answer: "3", value: false },
      { answer: "4", value: false },
    ],
  },
  {
    subject: "Solve the inequality: $2x - 3 < 7$.",
    answers: [
      { answer: "$x < 5$", value: true },
      { answer: "$x > 5$", value: false },
      { answer: "$x < 2$", value: false },
      { answer: "$x > 2$", value: false },
    ],
  },
  {
    subject:
      "A father is twice as old as his son. If the sum of their ages is 60, how old is the son?",
    answers: [
      { answer: "15", value: false },
      { answer: "20", value: true },
      { answer: "30", value: false },
      { answer: "40", value: false },
    ],
  },
  {
    subject:
      "Find the 5th term of an arithmetic progression with first term 3 and common difference 4.",
    answers: [
      { answer: "19", value: true },
      { answer: "20", value: false },
      { answer: "23", value: false },
      { answer: "27", value: false },
    ],
  },
  {
    subject:
      "What is the mode of the following data set: 2, 3, 5, 2, 4, 2, 6, 7?",
    answers: [
      { answer: "3", value: false },
      { answer: "4", value: false },
      { answer: "2", value: true },
      { answer: "5", value: false },
    ],
  },
  {
    subject: "Calculate the mean of 10, 12, 15, 8, 5.",
    answers: [
      { answer: "9", value: false },
      { answer: "10", value: true },
      { answer: "12", value: false },
      { answer: "15", value: false },
    ],
  },
  {
    subject:
      "In a class of 30 students, 18 play football and 10 play basketball. If 5 play both, how many play neither?",
    answers: [
      { answer: "5", value: false },
      { answer: "7", value: true },
      { answer: "9", value: false },
      { answer: "10", value: false },
    ],
  },
  {
    subject: "Find the size of an interior angle of a regular octagon.",
    answers: [
      { answer: "$135^\\circ$", value: true },
      { answer: "$120^\\circ$", value: false },
      { answer: "$108^\\circ$", value: false },
      { answer: "$90^\\circ$", value: false },
    ],
  },
  {
    subject: "The sum of angles in a triangle is ______ degrees.",
    answers: [
      { answer: "90", value: false },
      { answer: "180", value: true },
      { answer: "270", value: false },
      { answer: "360", value: false },
    ],
  },
  {
    subject:
      "If $\\tan \\theta = 1$, what is the value of $\\theta$ (in degrees)?",
    answers: [
      { answer: "$30^\\circ$", value: false },
      { answer: "$45^\\circ$", value: true },
      { answer: "$60^\\circ$", value: false },
      { answer: "$90^\\circ$", value: false },
    ],
  },
  {
    subject:
      "What is the gradient of the line passing through points (2, 3) and (4, 7)?",
    answers: [
      { answer: "1", value: false },
      { answer: "2", value: true },
      { answer: "3", value: false },
      { answer: "4", value: false },
    ],
  },
  {
    subject:
      "The circumference of a circle is $22 \\text{ cm}$. Find its radius. (Take $\\pi = 22/7$)",
    answers: [
      { answer: "$3.5 \\text{ cm}$", value: true },
      { answer: "$7 \\text{ cm}$", value: false },
      { answer: "$14 \\text{ cm}$", value: false },
      { answer: "$21 \\text{ cm}$", value: false },
    ],
  },
  {
    subject:
      "Calculate the area of a rectangle with length $8 \\text{ cm}$ and width $5 \\text{ cm}$.",
    answers: [
      { answer: "$13 \\text{ cm}^2$", value: false },
      { answer: "$26 \\text{ cm}^2$", value: false },
      { answer: "$40 \\text{ cm}^2$", value: true },
      { answer: "$80 \\text{ cm}^2$", value: false },
    ],
  },
  {
    subject: "Find the median of the following numbers: 5, 2, 8, 3, 7.",
    answers: [
      { answer: "2", value: false },
      { answer: "5", value: true },
      { answer: "7", value: false },
      { answer: "8", value: false },
    ],
  },
  {
    subject: "What is the probability of rolling a 6 on a fair six-sided die?",
    answers: [
      { answer: "1/2", value: false },
      { answer: "1/3", value: false },
      { answer: "1/6", value: true },
      { answer: "1", value: false },
    ],
  },
  {
    subject:
      "If $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$, find the determinant of A.",
    answers: [
      { answer: "5", value: true },
      { answer: "11", value: false },
      { answer: "7", value: false },
      { answer: "2", value: false },
    ],
  },
  {
    subject:
      "The area of a square is $64 \\text{ cm}^2$. What is its perimeter?",
    answers: [
      { answer: "$8 \\text{ cm}$", value: false },
      { answer: "$16 \\text{ cm}$", value: false },
      { answer: "$32 \\text{ cm}$", value: true },
      { answer: "$64 \\text{ cm}$", value: false },
    ],
  },
  {
    subject: "What is the value of $(0.5)^2$?",
    answers: [
      { answer: "0.25", value: true },
      { answer: "0.025", value: false },
      { answer: "2.5", value: false },
      { answer: "0.5", value: false },
    ],
  },
  {
    subject: "Express $0.0000078$ in standard form.",
    answers: [
      { answer: "$7.8 \\times 10^{-5}$", value: false },
      { answer: "$7.8 \\times 10^{-6}$", value: true },
      { answer: "$7.8 \\times 10^{6}$", value: false },
      { answer: "$7.8 \\times 10^{5}$", value: false },
    ],
  },
  {
    subject:
      "Given that $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{1, 2, 3\\}$ and $B = \\{3, 4\\}$, find $A \\cup B$.",
    answers: [
      { answer: "$\\{1, 2, 3, 4\\}$", value: true },
      { answer: "$\\{3\\}$", value: false },
      { answer: "$\\{1, 2, 4\\}$", value: false },
      { answer: "$\\{1, 2, 3, 4, 5\\}$", value: false },
    ],
  },
  {
    subject: "Expand and simplify $(x + 3)(x - 2)$.",
    answers: [
      { answer: "$x^2 + x - 6$", value: true },
      { answer: "$x^2 - x - 6$", value: false },
      { answer: "$x^2 + 5x - 6$", value: false },
      { answer: "$x^2 - 5x - 6$", value: false },
    ],
  },
  {
    subject:
      "The sum of the first n terms of an AP is given by $S_n = \\frac{n}{2}(2a + (n-1)d)$. Find $S_5$ if $a=2$ and $d=3$.",
    answers: [
      { answer: "25", value: false },
      { answer: "35", value: true },
      { answer: "40", value: false },
      { answer: "50", value: false },
    ],
  },
  {
    subject:
      "If $\\sin \\theta = 0.5$, find $\\theta$ (in degrees) for $0^\\circ \\le \\theta \\le 90^\\circ$.",
    answers: [
      { answer: "$30^\\circ$", value: true },
      { answer: "$45^\\circ$", value: false },
      { answer: "$60^\\circ$", value: false },
      { answer: "$90^\\circ$", value: false },
    ],
  },
  {
    subject:
      "The length of the hypotenuse of a right-angled triangle is $10 \\text{ cm}$. If one of the other sides is $6 \\text{ cm}$, find the length of the third side.",
    answers: [
      { answer: "$7 \\text{ cm}$", value: false },
      { answer: "$8 \\text{ cm}$", value: true },
      { answer: "$9 \\text{ cm}$", value: false },
      { answer: "$12 \\text{ cm}$", value: false },
    ],
  },
  {
    subject: "What is the value of $5!$?",
    answers: [
      { answer: "20", value: false },
      { answer: "100", value: false },
      { answer: "120", value: true },
      { answer: "240", value: false },
    ],
  },
  {
    subject:
      "A bag contains 3 red balls and 5 blue balls. If a ball is picked at random, what is the probability that it is blue?",
    answers: [
      { answer: "3/8", value: false },
      { answer: "5/8", value: true },
      { answer: "1/2", value: false },
      { answer: "1", value: false },
    ],
  },
  {
    subject: "Factorize $x^2 - 9$.",
    answers: [
      { answer: "$(x-3)^2$", value: false },
      { answer: "$(x+3)(x-3)$", value: true },
      { answer: "$(x+9)(x-9)$", value: false },
      { answer: "$(x-9)^2$", value: false },
    ],
  },
  {
    subject: "Convert 10110 in base 2 to base 8.",
    answers: [
      { answer: "$26_8$", value: true },
      { answer: "$16_8$", value: false },
      { answer: "$22_8$", value: false },
      { answer: "$30_8$", value: false },
    ],
  },
  {
    subject: "Simplify $\\frac{1}{2} + \\frac{1}{3}$.",
    answers: [
      { answer: "2/5", value: false },
      { answer: "5/6", value: true },
      { answer: "1/5", value: false },
      { answer: "3/6", value: false },
    ],
  },
  {
    subject: "If $y = 3x^2 - 2x + 1$, find $\\frac{dy}{dx}$.",
    answers: [
      { answer: "$3x - 2$", value: false },
      { answer: "$6x - 2$", value: true },
      { answer: "$6x^2 - 2$", value: false },
      { answer: "$3x^2 - 2$", value: false },
    ],
  },
  {
    subject: "Find the range of the following data: 12, 5, 18, 7, 20.",
    answers: [
      { answer: "13", value: false },
      { answer: "15", value: true },
      { answer: "18", value: false },
      { answer: "20", value: false },
    ],
  },
  {
    subject: "What is the value of $\\log_{10} 1000$?",
    answers: [
      { answer: "1", value: false },
      { answer: "2", value: false },
      { answer: "3", value: true },
      { answer: "4", value: false },
    ],
  },
  {
    subject:
      "The exterior angle of a regular polygon is $45^\\circ$. How many sides does it have?",
    answers: [
      { answer: "6", value: false },
      { answer: "8", value: true },
      { answer: "9", value: false },
      { answer: "10", value: false },
    ],
  },
  {
    subject:
      "Calculate the volume of a cylinder with radius $7 \\text{ cm}$ and height $10 \\text{ cm}$. (Take $\\pi = 22/7$)",
    answers: [
      { answer: "$1540 \\text{ cm}^3$", value: true },
      { answer: "$770 \\text{ cm}^3$", value: false },
      { answer: "$3080 \\text{ cm}^3$", value: false },
      { answer: "$220 \\text{ cm}^3$", value: false },
    ],
  },
  {
    subject:
      "If $P = \\{x: 1 \\le x \\le 5, x \\text{ is an integer}\\}$ and $Q = \\{x: 2 \\le x \\le 6, x \\text{ is an integer}\\}$, find $P \\cap Q$.",
    answers: [
      { answer: "$\\{2, 3, 4, 5\\}$", value: true },
      { answer: "$\\{1, 2, 3, 4, 5, 6\\}$", value: false },
      { answer: "$\\{1\\}$", value: false },
      { answer: "$\\{6\\}$", value: false },
    ],
  },
  {
    subject: "What is the value of $$\\int (2x + 1) dx$$?",
    answers: [
      { answer: "$x^2 + x + C$", value: true },
      { answer: "$2x^2 + x + C$", value: false },
      { answer: "$x^2 + 1 + C$", value: false },
      { answer: "$2 + C$", value: false },
    ],
  },
  {
    subject:
      "The area of a circle is $154 \\text{ cm}^2$. Find its diameter. (Take $\\pi = 22/7$)",
    answers: [
      { answer: "$7 \\text{ cm}$", value: false },
      { answer: "$14 \\text{ cm}$", value: true },
      { answer: "$21 \\text{ cm}$", value: false },
      { answer: "$28 \\text{ cm}$", value: false },
    ],
  },
  {
    subject: "Solve for y: $2(y - 1) = 8$.",
    answers: [
      { answer: "3", value: false },
      { answer: "4", value: false },
      { answer: "5", value: true },
      { answer: "6", value: false },
    ],
  },
  {
    subject: "A worker earns N1200 per day. How much will he earn in 5 days?",
    answers: [
      { answer: "N240", value: false },
      { answer: "N1205", value: false },
      { answer: "N6000", value: true },
      { answer: "N600", value: false },
    ],
  },
  {
    subject: "What is the complementary angle of $65^\\circ$?",
    answers: [
      { answer: "$25^\\circ$", value: true },
      { answer: "$115^\\circ$", value: false },
      { answer: "$35^\\circ$", value: false },
      { answer: "$90^\\circ$", value: false },
    ],
  },
  {
    subject:
      "If the base angles of an isosceles triangle are $50^\\circ$ each, what is the vertical angle?",
    answers: [
      { answer: "$50^\\circ$", value: false },
      { answer: "$80^\\circ$", value: true },
      { answer: "$100^\\circ$", value: false },
      { answer: "$130^\\circ$", value: false },
    ],
  },
  {
    subject: "Find the value of x if the mean of 2, 4, x, 8 is 5.",
    answers: [
      { answer: "4", value: false },
      { answer: "6", value: true },
      { answer: "8", value: false },
      { answer: "10", value: false },
    ],
  },
  {
    subject:
      "What is the probability of picking a vowel from the letters of the word 'MATHEMATICS'?",
    answers: [
      { answer: "4/11", value: true },
      { answer: "7/11", value: false },
      { answer: "5/11", value: false },
      { answer: "1/2", value: false },
    ],
  },
  {
    subject:
      "Calculate the simple interest on N5000 for 3 years at 4% per annum.",
    answers: [
      { answer: "N200", value: false },
      { answer: "N400", value: false },
      { answer: "N600", value: true },
      { answer: "N1200", value: false },
    ],
  },
  {
    subject:
      "What is the difference between the largest and smallest numbers in the set $\\{15, 8, 23, 4, 10\\}$?",
    answers: [
      { answer: "11", value: false },
      { answer: "19", value: true },
      { answer: "20", value: false },
      { answer: "23", value: false },
    ],
  },
  {
    subject: "Round 3.14159 to 2 decimal places.",
    answers: [
      { answer: "3.14", value: true },
      { answer: "3.15", value: false },
      { answer: "3.1", value: false },
      { answer: "3.2", value: false },
    ],
  },
  {
    subject:
      "A car travels at a speed of $60 \\text{ km/h}$. How long will it take to cover a distance of $180 \\text{ km}$?",
    answers: [
      { answer: "2 hours", value: false },
      { answer: "3 hours", value: true },
      { answer: "4 hours", value: false },
      { answer: "5 hours", value: false },
    ],
  },
  {
    subject: "If $f(x) = 2x - 5$, find $f(3)$.",
    answers: [
      { answer: "1", value: true },
      { answer: "2", value: false },
      { answer: "3", value: false },
      { answer: "4", value: false },
    ],
  },
  {
    subject: "What is the next term in the sequence: 1, 4, 9, 16, ...?",
    answers: [
      { answer: "20", value: false },
      { answer: "25", value: true },
      { answer: "30", value: false },
      { answer: "36", value: false },
    ],
  },
  {
    subject:
      "If $\\begin{pmatrix} 1 & 2 \\\\ 3 & x \\end{pmatrix}$ is a singular matrix, find x.",
    answers: [
      { answer: "2", value: false },
      { answer: "3", value: false },
      { answer: "6", value: true },
      { answer: "9", value: false },
    ],
  },
  {
    subject: "Express $240\\text{ minutes}$ in hours.",
    answers: [
      { answer: "2 hours", value: false },
      { answer: "3 hours", value: false },
      { answer: "4 hours", value: true },
      { answer: "5 hours", value: false },
    ],
  },
  {
    subject:
      "The ratio of boys to girls in a class is 2:3. If there are 12 boys, how many girls are there?",
    answers: [
      { answer: "15", value: false },
      { answer: "18", value: true },
      { answer: "20", value: false },
      { answer: "24", value: false },
    ],
  },
  {
    subject:
      "Calculate the area of a triangle with base $10 \\text{ cm}$ and height $6 \\text{ cm}$.",
    answers: [
      { answer: "$16 \\text{ cm}^2$", value: false },
      { answer: "$30 \\text{ cm}^2$", value: true },
      { answer: "$60 \\text{ cm}^2$", value: false },
      { answer: "$120 \\text{ cm}^2$", value: false },
    ],
  },
  {
    subject: "What is the sum of the angles on a straight line?",
    answers: [
      { answer: "$90^\\circ$", value: false },
      { answer: "$180^\\circ$", value: true },
      { answer: "$270^\\circ$", value: false },
      { answer: "$360^\\circ$", value: false },
    ],
  },
  {
    subject:
      "If $\\cos \\theta = 0.8$, find $\\sin \\theta$ (approx. to 1 decimal place) for acute $\\theta$.",
    answers: [
      { answer: "0.5", value: false },
      { answer: "0.6", value: true },
      { answer: "0.7", value: false },
      { answer: "0.9", value: false },
    ],
  },
  {
    subject:
      "Find the equation of a straight line with gradient 2 and y-intercept 3.",
    answers: [
      { answer: "$y = 2x$", value: false },
      { answer: "$y = 3x + 2$", value: false },
      { answer: "$y = 2x + 3$", value: true },
      { answer: "$y = 3x - 2$", value: false },
    ],
  },
  {
    subject:
      "What is the bearing of B from A if the bearing of A from B is $210^\\circ$?",
    answers: [
      { answer: "$030^\\circ$", value: true },
      { answer: "$150^\\circ$", value: false },
      { answer: "$060^\\circ$", value: false },
      { answer: "$090^\\circ$", value: false },
    ],
  },
];
const questionEl = document.getElementById("question");
const option1Text = document.getElementById("option1-text");
const option2Text = document.getElementById("option2-text");
const option3Text = document.getElementById("option3-text");
const option4Text = document.getElementById("option4-text");
const option1Btn = document.getElementById("option1");
const option2Btn = document.getElementById("option2");
const option3Btn = document.getElementById("option3");
const option4Btn = document.getElementById("option4");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const scoreEl = document.getElementById("score");
const questionCountEl = document.getElementById("question-count");
const currentQEl = document.getElementById("current-q");
const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("timer");
const examContainer = document.getElementById("exam-container");
const resultContainer = document.getElementById("result-container");
const finalScoreEl = document.getElementById("final-score");
const correctAnswersEl = document.getElementById("correct-answers");
const incorrectAnswersEl = document.getElementById("incorrect-answers");
const skippedAnswersEl = document.getElementById("skipped-answers");
const restartBtn = document.getElementById("restart-btn");

// Exam state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let examQuestions = [];
let timer;
let timeLeft = 30 * 60;
let answeredQuestions = 0;

// Initialize the exam
function initExam() {
  // Reset state
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  timeLeft = 30 * 60;
  answeredQuestions = 0;
  updateScore();

  // Generate exam questions
  const usedIndices = new Set(); // Track used question indices

  while (examQuestions.length < 30 && usedIndices.size < trivia.length) {
    const randomIndex = Math.floor(Math.random() * trivia.length);

    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      examQuestions.push({
        ...trivia[randomIndex],
        userAnswer: null,
        questionNumber: examQuestions.length + 1,
      });
      userAnswers.push(null);
    }
  }

  // Handle case < 30 unique questions
  if (examQuestions.length < 30) {
    console.warn(`Only found ${examQuestions.length} unique questions`);
  }

  // Hide results, show exam
  resultContainer.style.display = "none";
  examContainer.style.display = "block";

  // Display first question
  displayQuestion(currentQuestionIndex);

  // Start timer
  startTimer();
}

// Start the timer
function startTimer() {
  clearInterval(timer);
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      endExam();
    }
  }, 1000);
}

// Update timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Change color when time is running low
  if (timeLeft < 180) {
    // 3 minutes
    timerEl.style.color = "#ff6b6b";
  }
}

// Display a question
function displayQuestion(index) {
  const question = examQuestions[index];

  // Update question elements
  questionEl.textContent = question.subject;
  option1Text.textContent = question.answers[0].answer;
  option2Text.textContent = question.answers[1].answer;
  option3Text.textContent = question.answers[2].answer;
  option4Text.textContent = question.answers[3].answer;

  // Update UI based on previous answer
  resetOptionStyles();
  if (question.userAnswer !== null) {
    highlightSelectedOption(question.userAnswer);
  }

  // Update progress
  currentQEl.textContent = index + 1;
  questionCountEl.textContent = `${index + 1}/30`;
  const progress = ((index + 1) / 30) * 100;
  progressBar.style.width = `${progress}%`;

  // Update navigation buttons
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === 29;
}

// Reset option styles
function resetOptionStyles() {
  const options = [option1Btn, option2Btn, option3Btn, option4Btn];
  options.forEach((option) => {
    option.style.backgroundColor = "#f5f7ff";
    option.style.borderColor = "#dde3ff";
  });
}

// Highlight selected option
function highlightSelectedOption(optionIndex) {
  const options = [option1Btn, option2Btn, option3Btn, option4Btn];
  options[optionIndex].style.backgroundColor = "#4caf50";
  options[optionIndex].style.borderColor = "white";
}

// Handle answer selection
function handleAnswer(optionIndex) {
  // Record user's answer
  examQuestions[currentQuestionIndex].userAnswer = optionIndex;
  userAnswers[currentQuestionIndex] = optionIndex;

  // Update UI
  resetOptionStyles();
  highlightSelectedOption(optionIndex);

  // Check if this question was previously unanswered
  if (userAnswers[currentQuestionIndex] === null) {
    answeredQuestions++;
  }
}

// Navigate to previous question
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
});

// Navigate to next question
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < 29) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  }
});

// Submit exam
submitBtn.addEventListener("click", endExam);

// End the exam and show results
function endExam() {
  clearInterval(timer);

  // Calculate score
  let correct = 0;
  let incorrect = 0;
  let skipped = 0;

  examQuestions.forEach((question) => {
    if (question.userAnswer === null) {
      skipped++;
    } else {
      if (question.answers[question.userAnswer].value) {
        correct++;
      } else {
        incorrect++;
      }
    }
  });

  score = correct;

  // Update results display
  finalScoreEl.textContent = `${score}/30`;
  correctAnswersEl.textContent = correct;
  incorrectAnswersEl.textContent = incorrect;
  skippedAnswersEl.textContent = skipped;

  // Show results, hide exam
  examContainer.style.display = "none";
  resultContainer.style.display = "block";
}

// Update score display
function updateScore() {
  scoreEl.textContent = score;
}

// Event listeners for options
option1Btn.addEventListener("click", () => handleAnswer(0));
option2Btn.addEventListener("click", () => handleAnswer(1));
option3Btn.addEventListener("click", () => handleAnswer(2));
option4Btn.addEventListener("click", () => handleAnswer(3));

// Restart button
restartBtn.addEventListener("click", initExam);

// Initialize the exam when page loads
window.onload = initExam;
