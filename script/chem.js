/*Array of questions and answers*/
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
    subject: "What is The IUPAC Name of CH₃CH₂OH?",
    answers: [
      { answer: "Ethanol", value: true },
      { answer: "Methanol", value: false },
      { answer: "Propanol", value: false },
      { answer: "Butanol", value: false },
    ],
  },
  {
    subject: "Which of These is an Example of an Exothermic Reaction?",
    answers: [
      { answer: "Photosynthesis", value: false },
      { answer: "Evaporation of water", value: false },
      { answer: "Combustion of fuel", value: true },
      { answer: "Melting of ice", value: false },
    ],
  },
  {
    subject: "The Mass Number of an Atom is The Sum of its...",
    answers: [
      { answer: "Protons only", value: false },
      { answer: "Neutrons only", value: false },
      { answer: "Protons and neutrons", value: true },
      { answer: "Protons and electrons", value: false },
    ],
  },
  {
    subject: "What is The Oxidation Number of Sulfur in H₂SO₄?",
    answers: [
      { answer: "+6", value: true },
      { answer: "+4", value: false },
      { answer: "+2", value: false },
      { answer: "0", value: false },
    ],
  },
  {
    subject: "Which Gas is Used in The Haber Process?",
    answers: [
      { answer: "Hydrogen", value: false },
      { answer: "Oxygen", value: false },
      { answer: "Nitrogen", value: false },
      { answer: "Nitrogen and hydrogen", value: true },
    ],
  },
  {
    subject: "The Periodic Table is Arranged in Order of:",
    answers: [
      { answer: "Atomic size", value: false },
      { answer: "Mass number", value: false },
      { answer: "Atomic number", value: true },
      { answer: "Neutron number", value: false },
    ],
  },
  {
    subject: "Which of The Following is a Strong Acid?",
    answers: [
      { answer: "H₂CO₃", value: false },
      { answer: "CH₃COOH", value: false },
      { answer: "HCl", value: true },
      { answer: "NH₄OH", value: false },
    ],
  },
  {
    subject: "Which Method is used to Separate Crude Oil Into its Components?",
    answers: [
      { answer: "Crystallization", value: false },
      { answer: "Fractional distillation", value: true },
      { answer: "Filtration", value: false },
      { answer: "Sublimation", value: false },
    ],
  },
  {
    subject: "The Rate of a Chemical Reaction can be Increased by:",
    answers: [
      { answer: "decreasing the temperature", value: false },
      { answer: "increasing the surface area of reactants", value: true },
      { answer: "removing the catalyst", value: false },
      { answer: "diluting the reactants", value: false },
    ],
  },
  {
    subject: "Which Process is Used for The Manufacture of Ammonia?",
    answers: [
      { answer: "Contact process", value: false },
      { answer: "Haber process", value: true },
      { answer: "Solvay process", value: false },
      { answer: "Bayer process", value: false },
    ],
  },
  {
    subject: "Which Element Has The Electronic Configuration 1s² 2s² 2p⁶?",
    answers: [
      { answer: "Neon", value: true },
      { answer: "Oxygen", value: false },
      { answer: "Carbon", value: false },
      { answer: "Fluorine", value: false },
    ],
  },
  {
    subject: "What is The Molar Mass of Ca(OH)₂?",
    answers: [
      { answer: "56 g/mol", value: false },
      { answer: "74 g/mol", value: true },
      { answer: "40 g/mol", value: false },
      { answer: "98 g/mol", value: false },
    ],
  },
  {
    subject: "What is The pH of a Neutral Solution at 25°C?",
    answers: [
      { answer: "0", value: false },
      { answer: "7", value: true },
      { answer: "14", value: false },
      { answer: "1", value: false },
    ],
  },
  {
    subject: "Which Acid is Found in The Stomach?",
    answers: [
      { answer: "Sulfuric acid", value: false },
      { answer: "Hydrochloric acid", value: true },
      { answer: "Nitric acid", value: false },
      { answer: "Ethanoic acid", value: false },
    ],
  },
  {
    subject: "Which Compound is Used to Test For The Presence of Starch?",
    answers: [
      { answer: "Iodine solution", value: true },
      { answer: "Benedict's solution", value: false },
      { answer: "Fehling's solution", value: false },
      { answer: "Sulfuric acid", value: false },
    ],
  },
  {
    subject: "Which of The Following Metals is The Most Reactive?",
    answers: [
      { answer: "Gold", value: false },
      { answer: "Sodium", value: true },
      { answer: "Copper", value: false },
      { answer: "Iron", value: false },
    ],
  },
  {
    subject:
      "Which Gas is Used to Fill Balloons Because it is lighter Than Air?",
    answers: [
      { answer: "Oxygen", value: false },
      { answer: "Hydrogen", value: false },
      { answer: "Nitrogen", value: false },
      { answer: "Helium", value: true },
    ],
  },
  {
    subject: "What is The Main Ore of Aluminum?",
    answers: [
      { answer: "Bauxite", value: true },
      { answer: "Hematite", value: false },
      { answer: "Galena", value: false },
      { answer: "Cassiterite", value: false },
    ],
  },
  {
    subject: "Which of The Following is a Noble Gas?",
    answers: [
      { answer: "Argon", value: true },
      { answer: "Chlorine", value: false },
      { answer: "Hydrogen", value: false },
      { answer: "Nitrogen", value: false },
    ],
  },
  {
    subject: "Which Gas Turns limewater Milky?",
    answers: [
      { answer: "Carbon dioxide", value: true },
      { answer: "Oxygen", value: false },
      { answer: "Nitrogen", value: false },
      { answer: "Chlorine", value: false },
    ],
  },
  {
    subject: "Which of These is a Transition Metal?",
    answers: [
      { answer: "Iron", value: true },
      { answer: "Calcium", value: false },
      { answer: "Potassium", value: false },
      { answer: "Aluminum", value: false },
    ],
  },
  {
    subject: "Which of These is an Alkaline Earth Metal?",
    answers: [
      { answer: "Magnesium", value: true },
      { answer: "Sodium", value: false },
      { answer: "Iron", value: false },
      { answer: "Copper", value: false },
    ],
  },

  {
    subject: "What Type of Bond is Formed Between Two Nonmetals?",
    answers: [
      { answer: "Ionic bond", value: false },
      { answer: "Metallic bond", value: false },
      { answer: "Covalent bond", value: true },
      { answer: "Hydrogen bond", value: false },
    ],
  },
  {
    subject: "Which of These is a Chemical Property of a Substance?",
    answers: [
      { answer: "Melting point", value: false },
      { answer: "Boiling point", value: false },
      { answer: "Reactivity with acid", value: true },
      { answer: "Density", value: false },
    ],
  },
  {
    subject: "Which Gas is Evolved When Zinc Reacts With Hydrochloric Acid?",
    answers: [
      { answer: "Oxygen", value: false },
      { answer: "Carbon dioxide", value: false },
      { answer: "Hydrogen", value: true },
      { answer: "Chlorine", value: false },
    ],
  },
  {
    subject: "Which Method is Used to Separate a Mixture of Salt and Sand?",
    answers: [
      { answer: "Distillation", value: false },
      { answer: "Filtration", value: true },
      { answer: "Chromatography", value: false },
      { answer: "Sublimation", value: false },
    ],
  },
  {
    subject: "What Color is litmus Paper in a Basic Solution?",
    answers: [
      { answer: "Red", value: false },
      { answer: "Blue", value: true },
      { answer: "Green", value: false },
      { answer: "Yellow", value: false },
    ],
  },
  {
    subject: "Which of The Following is Not an Alloy?",
    answers: [
      { answer: "Brass", value: false },
      { answer: "Bronze", value: false },
      { answer: "Steel", value: false },
      { answer: "Sodium", value: true },
    ],
  },
  {
    subject: "Which of The Following is Used in The Treatment of Water?",
    answers: [
      { answer: "Chlorine", value: true },
      { answer: "Hydrogen", value: false },
      { answer: "Nitrogen", value: false },
      { answer: "Oxygen", value: false },
    ],
  },
  {
    subject: "What is The Chemical Formula of Washing Soda?",
    answers: [
      { answer: "Na₂CO₃·10H₂O", value: true },
      { answer: "NaHCO₃", value: false },
      { answer: "NaOH", value: false },
      { answer: "CaCO₃", value: false },
    ],
  },

  {
    subject: "What is The Primary Constituent of Natural Gas?",
    answers: [
      { answer: "Methane", value: true },
      { answer: "Ethane", value: false },
      { answer: "Butane", value: false },
      { answer: "Propane", value: false },
    ],
  },
  {
    subject: "Which of The Following is a Greenhouse Gas?",
    answers: [
      { answer: "Oxygen", value: false },
      { answer: "Carbon dioxide", value: true },
      { answer: "Nitrogen", value: false },
      { answer: "Argon", value: false },
    ],
  },
  {
    subject: "What is the Process of Removing Impurities From Iron Called?",
    answers: [
      { answer: "Electrolysis", value: false },
      { answer: "Refining", value: true },
      { answer: "Filtration", value: false },
      { answer: "Distillation", value: false },
    ],
  },
  {
    subject: "Which of These Elements is a Halogen?",
    answers: [
      { answer: "Chlorine", value: true },
      { answer: "Oxygen", value: false },
      { answer: "Nitrogen", value: false },
      { answer: "Calcium", value: false },
    ],
  },
  {
    subject: "Which of the Following is a Physical Change?",
    answers: [
      { answer: "Burning wood", value: false },
      { answer: "Melting ice", value: true },
      { answer: "Rusting iron", value: false },
      { answer: "Baking a cake", value: false },
    ],
  },
  {
    subject: "Which Acid is Used in Car Batteries?",
    answers: [
      { answer: "Hydrochloric acid", value: false },
      { answer: "Sulfuric acid", value: true },
      { answer: "Nitric acid", value: false },
      { answer: "Acetic acid", value: false },
    ],
  },
  {
    subject: "Which Process Involves the Loss of Electrons?",
    answers: [
      { answer: "Reduction", value: false },
      { answer: "Oxidation", value: true },
      { answer: "Neutralization", value: false },
      { answer: "Electrolysis", value: false },
    ],
  },
  {
    subject: "What Type of Reaction is 2H₂ + O₂ → 2H₂O?",
    answers: [
      { answer: "Displacement", value: false },
      { answer: "Decomposition", value: false },
      { answer: "Combination", value: true },
      { answer: "Neutralization", value: false },
    ],
  },
  {
    subject: "Which of These is a Base?",
    answers: [
      { answer: "NaOH", value: true },
      { answer: "HCl", value: false },
      { answer: "CH₃COOH", value: false },
      { answer: "H₂SO₄", value: false },
    ],
  },
  {
    subject: "Which Instrument is Used to Measure Atmospheric Pressure?",
    answers: [
      { answer: "Thermometer", value: false },
      { answer: "Barometer", value: true },
      { answer: "Manometer", value: false },
      { answer: "Hygrometer", value: false },
    ],
  },
  {
    subject: "What is the pH of a Neutral Solution?",
    answers: [
      { answer: "0", value: false },
      { answer: "14", value: false },
      { answer: "7", value: true },
      { answer: "1", value: false },
    ],
  },
  {
    subject: "Which of These Metals can be Extracted by Electrolysis?",
    answers: [
      { answer: "Iron", value: false },
      { answer: "Copper", value: false },
      { answer: "Sodium", value: true },
      { answer: "Zinc", value: false },
    ],
  },
  {
    subject:
      "Which of the Following Gases is Collected Over Water Because it is Insoluble? ",
    answers: [
      { answer: "Hydrogen", value: true },
      { answer: "Ammonia", value: false },
      { answer: "Chlorine", value: false },
      { answer: "Carbon dioxide", value: false },
    ],
  },
  {
    subject: "What Happens at the Anode During Electrolysis of Brine?",
    answers: [
      { answer: "Hydrogen is released", value: false },
      { answer: "Chlorine is released", value: true },
      { answer: "Oxygen is released", value: false },
      { answer: "Sodium is released", value: false },
    ],
  },
  {
    subject: "Which Indicator Turns Red in an Acidic Solution?",
    answers: [
      { answer: "Phenolphthalein", value: false },
      { answer: "Methyl orange", value: true },
      { answer: "Litmus", value: false },
      { answer: "Universal indicator", value: false },
    ],
  },
  {
    subject: "Which Compound is Commonly Used as a Preservative?",
    answers: [
      { answer: "Sodium chloride", value: false },
      { answer: "Benzoic acid", value: true },
      { answer: "Ammonium nitrate", value: false },
      { answer: "Calcium oxide", value: false },
    ],
  },
  {
    subject: "Which of the Following is a Noble Gas?",
    answers: [
      { answer: "Oxygen", value: false },
      { answer: "Helium", value: true },
      { answer: "Hydrogen", value: false },
      { answer: "Chlorine", value: false },
    ],
  },
  {
    subject: "What is the Main Ore of Aluminum?",
    answers: [
      { answer: "Cryolite", value: false },
      { answer: "Bauxite", value: true },
      { answer: "Hematite", value: false },
      { answer: "Magnetite", value: false },
    ],
  },
  {
    subject: "Which Process is Used to Make Ammonia Industrially?",
    answers: [
      { answer: "Haber process", value: true },
      { answer: "Contact process", value: false },
      { answer: "Electrolysis", value: false },
      { answer: "Polymerization", value: false },
    ],
  },
];

// DOM Elements
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
