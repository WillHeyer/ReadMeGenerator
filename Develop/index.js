const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [{
    type: 'input',
    message: 'What is the title of your project',
    name: 'title',
},
{
    type: 'input',
    message: 'What is the description of your project',
    name: 'description'
},
{
    type: 'input',
    message: 'What is the installation process',
    name: 'install',
},
{
    type: 'input',
    message: 'How do you use the application',
    name: 'usage',
},
{
    type: 'input',
    message: 'Did anyone else contribute to this application',
    name: 'contribution',
},
{
    type: 'input',
    message: 'How do you test your application',
    name: 'test',
},
{
    type: 'list',
    message: 'What license are you using',
    name: 'license',
    choices: ['MIT License', 'GVL GPL License', 'Apache License', 'No License']
},
{
    type: 'input',
    message: 'What is your Github username',
    name: 'username',
},
{
    type: 'input',
    message: 'What is your email',
    name: 'email',
},
{
    type: 'input',
    message: 'Any questions',
    name: 'questions',
},
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        
        console.log("ReadMe was created");
    });
}


function init(){
    inquirer.prompt(questions)
        .then(answers => writeToFile('Readme.md', answers))
        .catch(err => console.log(err))
}


init();