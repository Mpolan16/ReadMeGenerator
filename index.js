const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./generateMarkdown');
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? ',
    },
    {
        type: 'input',
        name: 'projectName',
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
        name: 'repoInfo',
        message: 'What does the user need to know about using the repo? ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo? ',
    },
];

const ask = async () => {
    return await inquirer.prompt(questions);
};

const writeReadMeFile = data => {
    fs.writeFile('./README.md', data, () => {
        console.log('made the read me')
    });
};
const init = async () => {
    const responses = await ask();
    writeReadMeFile(generateMarkdown(responses));
};


init();
