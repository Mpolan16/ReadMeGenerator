const inquirer = require("inquirer");
const questions = [
"What is your GitHub username?",
"What is your project's name?",
"Please write a short description of your project",
"What kind of license should your project have?",
"What command should be run to install dependencies?",
"What command should be run to run tests?",
"What does the user need to know about using the repo?",
"What does the user need to know about contributing to the repo?"
];
function askQuestion() {
    inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name:"GitHub Username"
    }
  ])

} 
function writeToFile(fileName, data) {
}


function init() {
askQuestion();
};

init();