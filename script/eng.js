let trivia = [
  {
    subject: "Which of The Following Substances is a Mixture?",
    answers: [
      { answer: "Sodium chloride", value: false },
      { answer: "Air", value: true },
      { answer: "Water", value: false },
      { answer: "Iron", value: false },
    ],
  },
  {
    subject:
      "Choose the word that has the same vowel sound as the one represented by the letters 'oo' in 'book'.",
    answers: [
      { answer: "food", value: false },
      { answer: "look", value: true },
      { answer: "moon", value: false },
      { answer: "soon", value: false },
    ],
  },
  {
    subject:
      "Which of the following words has the stress on the third syllable?",
    answers: [
      { answer: "president", value: false },
      { answer: "information", value: true },
      { answer: "computer", value: false },
      { answer: "difficult", value: false },
    ],
  },
  {
    subject:
      "Choose the word that is **opposite in meaning** to the underlined word: The country faced **dire** economic challenges.",
    answers: [
      { answer: "terrible", value: false },
      { answer: "mild", value: true },
      { answer: "severe", value: false },
      { answer: "urgent", value: false },
    ],
  },
  {
    subject:
      "Choose the word that is **nearest in meaning** to the underlined word: Her arguments were very **persuasive**.",
    answers: [
      { answer: "weak", value: false },
      { answer: "convincing", value: true },
      { answer: "confusing", value: false },
      { answer: "long", value: false },
    ],
  },
  {
    subject:
      "Complete the sentence: Neither the students nor their teacher ______ in favour of the strike.",
    answers: [
      { answer: "are", value: false },
      { answer: "is", value: true },
      { answer: "were", value: false },
      { answer: "have been", value: false },
    ],
  },
  {
    subject: "Identify the word that has the 'z' sound as in 'zoo'.",
    answers: [
      { answer: "rose", value: true },
      { answer: "loose", value: false },
      { answer: "hiss", value: false },
      { answer: "price", value: false },
    ],
  },
  {
    subject: "He ______ abroad for five years now.",
    answers: [
      { answer: "is living", value: false },
      { answer: "has been living", value: true },
      { answer: "lived", value: false },
      { answer: "lives", value: false },
    ],
  },
  {
    subject:
      "Choose the correct question tag: You haven't finished yet, ______?",
    answers: [
      { answer: "have you", value: true },
      { answer: "haven't you", value: false },
      { answer: "do you", value: false },
      { answer: "don't you", value: false },
    ],
  },
  {
    subject: "Which of these sentences is grammatically correct?",
    answers: [
      { answer: "He was accused for theft.", value: false },
      { answer: "He was accused of theft.", value: true },
      { answer: "He was accused with theft.", value: false },
      { answer: "He was accused about theft.", value: false },
    ],
  },
  {
    subject: "A place where experiments are carried out is called a ______.",
    answers: [
      { answer: "library", value: false },
      { answer: "laboratory", value: true },
      { answer: "studio", value: false },
      { answer: "lecture hall", value: false },
    ],
  },
  {
    subject: "Choose the word that rhymes with 'cough'.",
    answers: [
      { answer: "through", value: false },
      { answer: "off", value: true },
      { answer: "bough", value: false },
      { answer: "dough", value: false },
    ],
  },
  {
    subject: "The old woman finally ______ after a long illness.",
    answers: [
      { answer: "passed out", value: false },
      { answer: "passed away", value: true },
      { answer: "passed on", value: false },
      { answer: "passed up", value: false },
    ],
  },
  {
    subject: "If I had known, I ______ have come.",
    answers: [
      { answer: "will", value: false },
      { answer: "would", value: true },
      { answer: "can", value: false },
      { answer: "may", value: false },
    ],
  },
  {
    subject: "She is allergic ______ nuts.",
    answers: [
      { answer: "with", value: false },
      { answer: "to", value: true },
      { answer: "from", value: false },
      { answer: "for", value: false },
    ],
  },
  {
    subject: "Which of the following is an imperative sentence?",
    answers: [
      { answer: "The sun rises in the east.", value: false },
      { answer: "Please close the door.", value: true },
      { answer: "How beautiful the night is!", value: false },
      { answer: "Are you feeling well?", value: false },
    ],
  },
  {
    subject: "Which word has a silent 'w'?",
    answers: [
      { answer: "write", value: true },
      { answer: "weather", value: false },
      { answer: "swim", value: false },
      { answer: "where", value: false },
    ],
  },
  {
    subject: "The girl, ______ parents are doctors, is very brilliant.",
    answers: [
      { answer: "who", value: false },
      { answer: "which", value: false },
      { answer: "whom", value: false },
      { answer: "whose", value: true },
    ],
  },
  {
    subject: "If I had money, I ______ a car.",
    answers: [
      { answer: "buy", value: false },
      { answer: "will buy", value: false },
      { answer: "would buy", value: true },
      { answer: "would have bought", value: false },
    ],
  },
  {
    subject: "Choose the word with the correct stress pattern: 'de**vel**op'.",
    answers: [
      { answer: "DEvelop", value: false },
      { answer: "deVElop", value: true },
      { answer: "develOP", value: false },
      { answer: "develop", value: false },
    ],
  },
  {
    subject: "He is indebted ______ his parents for their support.",
    answers: [
      { answer: "with", value: false },
      { answer: "to", value: true },
      { answer: "for", value: false },
      { answer: "by", value: false },
    ],
  },
  {
    subject: "Bite the bullet. This idiom means ______.",
    answers: [
      { answer: "to physically bite a bullet", value: false },
      { answer: "to endure a difficult situation", value: true },
      { answer: "to give up easily", value: false },
      { answer: "to shoot someone", value: false },
    ],
  },
  {
    subject: "The underlined word refers to a group: A **gaggle** of geese.",
    answers: [
      { answer: "group of dogs", value: false },
      { answer: "group of birds", value: true },
      { answer: "group of fish", value: false },
      { answer: "group of insects", value: false },
    ],
  },
  {
    subject: "Choose the correct spelling:",
    answers: [
      { answer: "concensus", value: false },
      { answer: "consensus", value: true },
      { answer: "consencus", value: false },
      { answer: "consenus", value: false },
    ],
  },
  {
    subject: "If he had been told, he ______ it.",
    answers: [
      { answer: "would do", value: false },
      { answer: "would have done", value: true },
      { answer: "will do", value: false },
      { answer: "is doing", value: false },
    ],
  },
  {
    subject: "The word 'debt' has a silent ______.",
    answers: [
      { answer: "e", value: false },
      { answer: "b", value: true },
      { answer: "t", value: false },
      { answer: "d", value: false },
    ],
  },
  {
    subject: "He managed to ______ his point of view.",
    answers: [
      { answer: "put across", value: true },
      { answer: "put off", value: false },
      { answer: "put down", value: false },
      { answer: "put out", value: false },
    ],
  },
  {
    subject: "Which sentence demonstrates correct concord?",
    answers: [
      { answer: "Bread and butter are my favorite breakfast.", value: false },
      { answer: "Bread and butter is my favorite breakfast.", value: true },
      { answer: "Each of the students have been informed.", value: false },
      { answer: "The jury was divided in their opinions.", value: false },
    ],
  },
  {
    subject: "Identify the word with the long 'ɔ:' vowel sound as in 'sport'.",
    answers: [
      { answer: "cot", value: false },
      { answer: "caught", value: true },
      { answer: "cut", value: false },
      { answer: "hot", value: false },
    ],
  },
  {
    subject: "He tried to ______ his old friends.",
    answers: [
      { answer: "catch up with", value: true },
      { answer: "catch up on", value: false },
      { answer: "catch out", value: false },
      { answer: "catch off", value: false },
    ],
  },
  {
    subject: "Which word is **opposite in meaning** to 'innocent'?",
    answers: [
      { answer: "guilty", value: true },
      { answer: "pure", value: false },
      { answer: "harmless", value: false },
      { answer: "blameless", value: false },
    ],
  },
  {
    subject: "The word 'pneumonia' has a silent ______.",
    answers: [
      { answer: "n", value: false },
      { answer: "e", value: false },
      { answer: "p", value: true },
      { answer: "m", value: false },
    ],
  },
  {
    subject:
      "He promised to turn over a new leaf. 'Turn over a new leaf' means to ______.",
    answers: [
      { answer: "change his old ways for the better", value: true },
      { answer: "start a new book", value: false },
      { answer: "turn a page", value: false },
      { answer: "change his job", value: false },
    ],
  },
  {
    subject:
      "Choose the word with the correct stress pattern: '**cha**racter'.",
    answers: [
      { answer: "chaRACter", value: false },
      { answer: "CHARacter", value: true },
      { answer: "characTER", value: false },
      { answer: "character", value: false },
    ],
  },
  {
    subject: "The committee ______ decided on a new course of action.",
    answers: [
      { answer: "have", value: false },
      { answer: "has", value: true },
      { answer: "were", value: false },
      { answer: "are", value: false },
    ],
  },
  {
    subject:
      "He's always blowing his own trumpet. 'Blowing his own trumpet' means he is ______.",
    answers: [
      { answer: "a musician", value: false },
      { answer: "boasting about himself", value: true },
      { answer: "playing a musical instrument", value: false },
      { answer: "being modest", value: false },
    ],
  },
  {
    subject: "Identify the word with the 'ŋ' (ng) sound.",
    answers: [
      { answer: "finger", value: true },
      { answer: "singing", value: true },
      { answer: "think", value: false },
      { answer: "long", value: true },
    ],
  },
  {
    subject: "The police news ______ disturbing.",
    answers: [
      { answer: "are", value: false },
      { answer: "were", value: false },
      { answer: "is", value: true },
      { answer: "have been", value: false },
    ],
  },
  {
    subject: "Choose the word that means 'a group of cattle'.",
    answers: [
      { answer: "flock", value: false },
      { answer: "herd", value: true },
      { answer: "pack", value: false },
      { answer: "school", value: false },
    ],
  },
  {
    subject: "She excelled ______ her studies.",
    answers: [
      { answer: "on", value: false },
      { answer: "in", value: true },
      { answer: "at", value: false },
      { answer: "with", value: false },
    ],
  },
  {
    subject: "Which of these words is a homophone of 'flour'?",
    answers: [
      { answer: "flower", value: true },
      { answer: "floor", value: false },
      { answer: "flow", value: false },
      { answer: "flirt", value: false },
    ],
  },
  {
    subject: "To make a long story short means to ______.",
    answers: [
      { answer: "tell a very long story", value: false },
      { answer: "summarize briefly", value: true },
      { answer: "write a short story", value: false },
      { answer: "interrupt someone", value: false },
    ],
  },
  {
    subject: "Choose the correct spelling:",
    answers: [
      { answer: "mischievious", value: false },
      { answer: "mischievous", value: true },
      { answer: "mischivous", value: false },
      { answer: "mischevious", value: false },
    ],
  },
  {
    subject: "If I had paid attention, I ______ understood the lesson.",
    answers: [
      { answer: "would", value: false },
      { answer: "would have", value: true },
      { answer: "will", value: false },
      { answer: "can", value: false },
    ],
  },
  {
    subject: "The word 'rapport' has a silent ______.",
    answers: [
      { answer: "a", value: false },
      { answer: "r", value: false },
      { answer: "t", value: true },
      { answer: "o", value: false },
    ],
  },
  {
    subject: "He decided to ______ the competition.",
    answers: [
      { answer: "pull out of", value: true },
      { answer: "pull up to", value: false },
      { answer: "pull off of", value: false },
      { answer: "pull through with", value: false },
    ],
  },
  {
    subject: "Each of the children ______ given a gift.",
    answers: [
      { answer: "were", value: false },
      { answer: "are", value: false },
      { answer: "was", value: true },
      { answer: "have been", value: false },
    ],
  },
  {
    subject: "Choose the word with the correct stress pattern: '**cert**ify'.",
    answers: [
      { answer: "cerTIfy", value: false },
      { answer: "CERtify", value: true },
      { answer: "certiFY", value: false },
      { answer: "certify", value: false },
    ],
  },
  {
    subject: "He was found guilty ______ murder.",
    answers: [
      { answer: "for", value: false },
      { answer: "of", value: true },
      { answer: "with", value: false },
      { answer: "about", value: false },
    ],
  },
  {
    subject: "The phrase 'to read between the lines' means ______.",
    answers: [
      { answer: "to read very carefully", value: false },
      { answer: "to understand the hidden meaning", value: true },
      { answer: "to skip some parts of a text", value: false },
      { answer: "to draw lines in a book", value: false },
    ],
  },
  {
    subject: "Which word has the short 'ɒ' vowel sound as in 'pot'?",
    answers: [
      { answer: "port", value: false },
      { answer: "put", value: false },
      { answer: "caught", value: false },
      { answer: "lock", value: true },
    ],
  },
  {
    subject: "He went ______ the window to get some fresh air.",
    answers: [
      { answer: "at", value: false },
      { answer: "out of", value: true },
      { answer: "in", value: false },
      { answer: "on", value: false },
    ],
  },
  {
    subject: "Which of these words is a homophone of 'sun'?",
    answers: [
      { answer: "son", value: true },
      { answer: "soon", value: false },
      { answer: "shine", value: false },
      { answer: "sand", value: false },
    ],
  },
  {
    subject: "He was caught red-handed. 'Red-handed' means ______.",
    answers: [
      { answer: "with red paint on his hands", value: false },
      { answer: "caught in the act of doing something wrong", value: true },
      { answer: "with bleeding hands", value: false },
      { answer: "having a fever", value: false },
    ],
  },
  {
    subject: "Choose the correct spelling:",
    answers: [
      { answer: "licence", value: false },
      { answer: "license", value: true },
      { answer: "lisence", value: false },
      { answer: "licens", value: false },
    ],
  },
  {
    subject: "If I study hard, I ______ pass the exam.",
    answers: [
      { answer: "would", value: false },
      { answer: "will", value: true },
      { answer: "can", value: false },
      { answer: "might", value: false },
    ],
  },
  {
    subject: "The word 'ballet' has a silent ______.",
    answers: [
      { answer: "b", value: false },
      { answer: "e", value: false },
      { answer: "t", value: true },
      { answer: "l", value: false },
    ],
  },
  {
    subject: "She is keen ______ learning new things.",
    answers: [
      { answer: "for", value: false },
      { answer: "on", value: true },
      { answer: "about", value: false },
      { answer: "with", value: false },
    ],
  },
  {
    subject: "He decided to ______ his resignation.",
    answers: [
      { answer: "hand in", value: true },
      { answer: "hand out", value: false },
      { answer: "hand over", value: false },
      { answer: "hand back", value: false },
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

let submit = document.getElementById("submit-btn");
