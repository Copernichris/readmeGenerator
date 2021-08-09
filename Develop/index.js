// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fileCreate);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of the project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Provide a description of the project",
        name: 'description'
    },
    {
        type: 'input',
        message: "Explain the instalation steps required",
        name: 'instalation'
    },
    {
        type: 'input',
        message: "How is the project used?",
        name: 'usage'
    },
    {
        type: 'list',
        message: "Select the license for this project",
        name: 'license',
        choices: ['ODbL','MIT', 'IBM', 'Mozilla Public License 2.0']        
    },
    {
        type: 'input',
        message: "Provide information on tests",
        name: 'tests'
    },
    {
        type: 'input',
        message: "Provide information for questions",
        name: 'questions'
    },
    {
        type: 'input',
        message: "What is your github username?",
        name: 'github'
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email'
    },
];

// TODO: Create a function to write README file
function fileCreate(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Your readme has been generated!')
});
}

// TODO: Create a function to initialize app
// function to initialize program
async function init() {    
    try {       
        const input = await inquirer.prompt(questions);                
        const generatedReadme = generateMarkdown(input);
        console.log(generatedReadme);
        await writeFileAsync('testReadMe.md', generatedReadme);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
