const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Give the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What's your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (qNum = 0; qNum < questions.length; qNum++)
    {
      candidateAnswers[qNum] = input.question(questions[qNum]);
    }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (qNum = 0; qNum < questions.length; qNum++)
  {
    console.log(`\n${qNum + 1}) ${questions[qNum]}`)
    console.log(`Your answer: ${candidateAnswers[qNum]}`);
    console.log(`Correct answer: ${correctAnswers[qNum]}`);
  }
  let answeredCorrect = 0;
    for (qNum = 0; qNum < questions.length; qNum++)
  {
    if (candidateAnswers[qNum].toLowerCase() === correctAnswers[qNum].toLowerCase())
    {
      answeredCorrect += 1;
    }
  }
  let grade = answeredCorrect/questions.length*100;
  console.log(answeredCorrect);
  console.log(questions.length);
  let status;
  if (grade >= 80)
  {
    status = "PASSED";
  }
  else
  {
    status = "FAILED";
  }
  return console.log(`\n>>> Overall Grade: ${grade}% (${answeredCorrect} of ${questions.length} responses correct) <<<\n>>> Status: ${status} <<<`);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome to candidate testing, ${candidateName}.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};