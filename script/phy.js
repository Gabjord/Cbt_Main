/*Array of questions and answers*/
let trivia = [
  {
    subject: "What is the SI Unit of Force ?",
    answers: [
      { answer: "Joule", value: false },
      { answer: "Newton", value: true },
      { answer: "Watt", value: false },
      { answer: "Pascal", value: false },
    ],
  },
  {
    subject: "Which of The Following is a Scalar Quantity ?",
    answers: [
      { answer: "Distance", value: true },
      { answer: "Velocity", value: false },
      { answer: "Force", value: false },
      { answer: "Acceleration", value: false },
    ],
  },
  {
    subject: " Newton's First Law of Motion is Also Called ?",
    answers: [
      { answer: "Law of Action and Reaction", value: false },
      { answer: "Law of Acceleration", value: false },
      { answer: "Law of Inertia", value: true },
      { answer: "Law of Universal Gravitation", value: false },
    ],
  },
  {
    subject:
      " A Car Accelerates From 10 m/s to 30 m/s in 5 Seconds. What is its Acceleration ?",
    answers: [
      { answer: "2 m/s²", value: false },
      { answer: "4 m/s²", value: true },
      { answer: "6 m/s²", value: false },
      { answer: "8 m/s²", value: false },
    ],
  },
  {
    subject: "The Principle of Conservation of Momentum States That:",
    answers: [
      { answer: "Momentum is always increasing", value: false },
      { answer: "Momentum depends on velocity only", value: false },
      {
        answer:
          "Total momentum before collision equals total momentum after collision ?",
        value: true,
      },
      { answer: "Momentum is zero in a closed system", value: false },
    ],
  },
  {
    subject: "Young's Modulus Measures a Material's ?",
    answers: [
      { answer: "Density", value: false },
      { answer: "Stiffness", value: false },
      { answer: "Elasticity", value: true },
      { answer: "Brittleness", value: false },
    ],
  },
  {
    subject:
      "Boyle's law Relates Pressure and Volume of a Gas Under Constant ?",
    answers: [
      { answer: "Temperature", value: true },
      { answer: "Density", value: false },
      { answer: "Mass", value: false },
      { answer: "Energy", value: false },
    ],
  },
  {
    subject: "The latent Heat of Fusion Refers to The Energy Required to:",
    answers: [
      { answer: "Change a solid to a gas", value: false },
      { answer: "Change a liquid to a gas", value: false },
      { answer: "Change a solid to a liquid", value: true },
      { answer: "Increase temperature of a liquid", value: false },
    ],
  },
  {
    subject:
      "The Critical Angle is The Angle of Incidence That Produces an Angle of Refraction of: ",
    answers: [
      { answer: "0°", value: false },
      { answer: "90°", value: true },
      { answer: "45°", value: false },
      { answer: "30°", value: false },
    ],
  },
  {
    subject:
      " A Concave Mirror is Used as a Shaving Mirror Because it Produces ?",
    answers: [
      { answer: "Magnified virtual images", value: true },
      { answer: "Inverted images only", value: false },
      { answer: "Diminished real images", value: false },
      { answer: "No images", value: false },
    ],
  },
  {
    subject: " The SI Unit of Electric Current is ?",
    answers: [
      { answer: "Volt", value: false },
      { answer: "Ohm", value: false },
      { answer: "Ampere", value: true },
      { answer: "Coulomb", value: false },
    ],
  },
  {
    subject:
      " Ohm's law States That Current is Directly Proportional to Voltage, Provided:",
    answers: [
      { answer: "The conductor is non-metallic", value: false },
      { answer: "Resistance is constant", value: true },
      { answer: "Temperature varies", value: false },
      { answer: "Power is high", value: false },
    ],
  },
  {
    subject: " An Ammeter is Always Connected in ?",
    answers: [
      { answer: "Neither series nor parallel", value: false },
      { answer: "Both series and parallel", value: false },
      { answer: "Parallel", value: false },
      { answer: "Series", value: true },
    ],
  },
  {
    subject: "The Function of a Fuse in an Electrical Circuit is to ?",
    answers: [
      { answer: "Increase current", value: false },
      { answer: "Prevent excessive current", value: true },
      { answer: "Store charge", value: false },
      { answer: "Measure voltage", value: false },
    ],
  },
  {
    subject:
      "  Faraday's law of Electromagnetic Induction Relates Induced E.M.F to ?",
    answers: [
      { answer: "Change in magnetic flux", value: true },
      { answer: "Electric field strength", value: false },
      { answer: "Current direction", value: false },
      { answer: "Resistance of the coil", value: false },
    ],
  },
  {
    subject: "  A Transformer Works Based on The Principle of:",
    answers: [
      { answer: "Magnetic resonance", value: false },
      { answer: "Electrostatic induction", value: false },
      { answer: "Self-induction", value: false },
      { answer: "Mutual induction", value: true },
    ],
  },
  {
    subject:
      " The Half-life of a Radioactive Substance is the Time Taken for ?",
    answers: [
      { answer: "All atoms to decay", value: false },
      { answer: "Half the atoms to decay", value: true },
      { answer: "The activity to double", value: false },
      { answer: "The substance to become stable", value: false },
    ],
  },
  {
    subject: "Which of the Following is NOT a Type of Radioactive Emission ?",
    answers: [
      { answer: "Alpha particles", value: false },
      { answer: "Gamma rays", value: false },
      { answer: "X-rays", value: true },
      { answer: "Beta particles", value: false },
    ],
  },
  {
    subject: " Simple Harmonic Motion is Characterized by ?",
    answers: [
      { answer: "Constant velocity", value: false },
      { answer: "Acceleration proportional to displacement", value: true },
      { answer: "Zero acceleration", value: false },
      { answer: "Linear displacement", value: false },
    ],
  },
  {
    subject: "Sound Waves are:",
    answers: [
      { answer: "Transverse waves", value: false },
      { answer: "Stationary waves", value: false },
      { answer: "Electromagnetic waves", value: false },
      { answer: "Longitudinal waves", value: true },
    ],
  },
  {
    subject: " The Slope of a Velocity-Time Graph Represents ?",
    answers: [
      { answer: "Distance", value: false },
      { answer: "Acceleration", value: true },
      { answer: "Displacement", value: false },
      { answer: "Velocity", value: false },
    ],
  },
  {
    subject: "The law of Inertia is Best Demonstrated by ?",
    answers: [
      { answer: "A book on a table", value: true },
      { answer: "A rolling ball", value: false },
      { answer: "A rocket launching", value: false },
      { answer: "A swinging pendulum", value: false },
    ],
  },
  {
    subject: " The Efficiency of a Machine is Always ?",
    answers: [
      { answer: "Greater than 100", value: false },
      { answer: "Equal to 100%", value: false },
      { answer: "Less than 100%", value: true },
      { answer: "Zero", value: false },
    ],
  },
  {
    subject:
      " The latent Heat of Vaporization Refers to Energy Needed to Change ?",
    answers: [
      { answer: "Solid to liquid", value: false },
      { answer: "Liquid to gas", value: true },
      { answer: "Gas to plasma", value: false },
      { answer: "Solid to gas", value: false },
    ],
  },
  {
    subject: "  The SI Unit of Specific Heat Capacity is ?",
    answers: [
      { answer: "J/kg", value: false },
      { answer: "W/m²", value: false },
      { answer: "J/K", value: false },
      { answer: "J/kgK", value: true },
    ],
  },
  {
    subject: "Conduction is Heat Transfer by ?",
    answers: [
      { answer: "Molecular collisions", value: true },
      { answer: "Fluid movement", value: false },
      { answer: "Vacuum", value: false },
      { answer: "Electromagnetic waves", value: false },
    ],
  },
  {
    subject: "  A Bimetallic Strip Bends When Heated Because ?",
    answers: [
      { answer: "Metals expand equally", value: false },
      { answer: "Metals expand differently", value: true },
      { answer: "Gravity acts on it", value: false },
      { answer: "One metal contracts", value: false },
    ],
  },
  {
    subject: "The Freezing Point of Water in Kelvin is ?",
    answers: [
      { answer: "0 K", value: false },
      { answer: "373 K", value: false },
      { answer: "273  k", value: true },
      { answer: "100 K", value: false },
    ],
  },
  {
    subject: "The First law of Thermodynamics is a Statement of ?",
    answers: [
      { answer: "Conservation of energy", value: true },
      { answer: "Entropy increase", value: false },
      { answer: "Heat flow direction", value: false },
      { answer: "Absolute zero", value: false },
    ],
  },
  {
    subject:
      "An Ideal Gas Expands Isothermally. What Happens to its Internal Energy ?",
    answers: [
      { answer: "Increases", value: false },
      { answer: "Decreases", value: false },
      { answer: "Remains constant", value: true },
      { answer: "Becomes zero", value: false },
    ],
  },
  {
    subject: "The Vacuum in a Thermo Flask Reduces Heat Loss by ?",
    answers: [
      { answer: "Conduction only", value: false },
      { answer: "Convection only", value: false },
      { answer: "Radiation only", value: false },
      { answer: "Conduction and convection", value: true },
    ],
  },
  {
    subject: " The Critical Angle Occurs When light Travels From ?",
    answers: [
      { answer: "Air to water", value: false },
      { answer: "Water to air", value: false },
      { answer: "Glass to air", value: true },
      { answer: "Air to glass", value: false },
    ],
  },
  {
    subject:
      " A Concave Mirror can Form a Virtual Image When The Object is Placed ?",
    answers: [
      { answer: "At the focus", value: false },
      { answer: "Between focus and mirror", value: true },
      { answer: "Beyond the center", value: false },
      { answer: "At infinity", value: false },
    ],
  },
  {
    subject: " The Speed of light is Highest in?",
    answers: [
      { answer: "Glass", value: false },
      { answer: "Water", value: false },
      { answer: "Air", value: true },
      { answer: "Diamond", value: false },
    ],
  },
  {
    subject: " Sound Cannot Travel Through a  ?",
    answers: [
      { answer: "Solid", value: false },
      { answer: "Liquid", value: false },
      { answer: "Gas", value: false },
      { answer: "Vacuum", value: true },
    ],
  },
  {
    subject:
      " The Phenomenon Where a Wave Changes Direction at a Boundary is Called ?",
    answers: [
      { answer: "Reflection", value: false },
      { answer: "Refraction", value: true },
      { answer: "Diffraction", value: false },
      { answer: "Interference", value: false },
    ],
  },
  {
    subject:
      "  A Force of 10N Acts on a Mass of 2kg. What is The Acceleration ?",
    answers: [
      { answer: "0.2 m/s²", value: false },
      { answer: "5 m/s²", value: true },
      { answer: "20 m/s²", value: false },
      { answer: "12 m/s²", value: false },
    ],
  },
  {
    subject: "The Energy Stored in a Stretched Spring is Called ?",
    answers: [
      { answer: "Elastic potential energy", value: true },
      { answer: "Kinetic energy", value: false },
      { answer: "Potential energy", value: false },
      { answer: "Thermal energy", value: false },
    ],
  },
  {
    subject: "  A Projectile Reaches Maximum Range when Fired at an Angle of?",
    answers: [
      { answer: "30°", value: false },
      { answer: "90°", value: false },
      { answer: "60°", value: false },
      { answer: "45°", value: true },
    ],
  },
  {
    subject:
      "  The Critical Angle For a Medium is 42°. What is its Refractive Index? (Sin 42° = 0.669) ?",
    answers: [
      { answer: "1.49", value: true },
      { answer: "1.33", value: false },
      { answer: "1.50", value: false },
      { answer: "1.25", value: false },
    ],
  },
  {
    subject:
      " A Transformer has 100 Turns in The Primary Coil and 500 Turns in The Secondary Coil. If The Input Voltage is 50V, The Output Voltage is ?",
    answers: [
      { answer: "10V", value: false },
      { answer: "250V", value: true },
      { answer: "500V", value: false },
      { answer: "1000V", value: false },
    ],
  },
  {
    subject: "Which of These is NOT a Fundamental Particle ?",
    answers: [
      { answer: "Electron", value: false },
      { answer: "Proton", value: false },
      { answer: "Neutron", value: false },
      { answer: "Photon", value: true },
    ],
  },
  {
    subject:
      "The Process by Which a Heavy Nucleus Splits Into Smaller Nuclei is Called ?",
    answers: [
      { answer: "Fusion", value: false },
      { answer: "Fission", value: true },
      { answer: "Radioactivity", value: false },
      { answer: "Transmutation", value: false },
    ],
  },
  {
    subject:
      "In the Photoelectric Effect, Increasing the Intensity of light Affects ?",
    answers: [
      { answer: "The kinetic energy of emitted electrons", value: false },
      { answer: "The threshold frequency", value: false },
      { answer: "The number of emitted electrons", value: true },
      { answer: "The work function", value: false },
    ],
  },
  {
    subject:
      " The Half-life of a Radioactive Element is 10 Days. What Fraction Remains After 30 Days ?",
    answers: [
      { answer: "1/2", value: false },
      { answer: "1/4", value: false },
      { answer: "1/8", value: true },
      { answer: "1/16", value: false },
    ],
  },
  {
    subject: "Which Radiation is Most Penetrating ?",
    answers: [
      { answer: "Alpha", value: false },
      { answer: "Gamma", value: true },
      { answer: "Beta", value: false },
      { answer: "X-rays", value: false },
    ],
  },
  {
    subject: "The Binding Energy of a   Nucleus is a Measure of its ?",
    answers: [
      { answer: "Stability", value: true },
      { answer: "Size", value: false },
      { answer: "Density", value: false },
      { answer: "Charge", value: false },
    ],
  },
  {
    subject: "In a Nuclear Reactor, the Function of the Moderator is to ?",
    answers: [
      { answer: "Absorb neutrons", value: false },
      { answer: "Slow down neutrons", value: true },
      { answer: "Speed up neutrons", value: false },
      { answer: "Reflect neutrons", value: false },
    ],
  },
  {
    subject: "The Unit of Electrical Resistance is ?",
    answers: [
      { answer: "Ampere", value: false },
      { answer: "Watts", value: false },
      { answer: "Volt", value: false },
      { answer: " Ohm", value: true },
    ],
  },
  {
    subject:
      "Boyle's Law States that for a Fixed Mass of Gas at Constant Temperature ?",
    answers: [
      { answer: "P ∝ V", value: false },
      { answer: "P ∝ 1/V", value: true },
      { answer: "V ∝ T", value: false },
      { answer: "P ∝ T", value: false },
    ],
  },
  {
    subject:
      "The Quantity of Heat Required to Raise the Temperature of a Unit Mass of a Substance by 1K is Called ?",
    answers: [
      { answer: "Heat capacity", value: false },
      { answer: "Specific heat capacity", value: true },
      { answer: "Latent heat", value: false },
      { answer: "Thermal conductivity", value: false },
    ],
  },
  {
    subject: "What is the SI Unit of Momentum?",
    answers: [
      { answer: "kg m/s²", value: false },
      { answer: "N s", value: true },
      { answer: "kg m/s", value: false },
      { answer: "J s", value: false },
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
