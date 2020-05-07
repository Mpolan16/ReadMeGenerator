const inquirer = require("inquirer");
const questions = [
      {
          type: 'input',
          name: 'username',
          message: 'What is your GitHub username? ',
      },
      {
          type: 'input',
          name: 'project name',
          message: 'What is your project name? ' ,
      },
      {
          type: 'input',
          name: 'description',
          message: 'Please write a short description of your project:',
      },
      {
          type: 'input',
          name: 'license',
          message: 'What kind of license should your project have? ',
      },
      {
          type: 'input',
          name: 'command',
          message: 'What command should be run to install dependencies? ',
      },
      {
          type: 'input',
          name: 'repo info',
          message: 'What does the user need to know about using the repo? ',
      },
      {
          type: 'input',
          name: 'contributing',
          message: 'What does the user need to know about contributing to the repo? ',
      },
  ];
function askQuestion() {
    inquirer.prompt(questions)

} 
function writeToFile(fileName, data) {
}


function init() {
askQuestion();
};

init();