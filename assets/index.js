let Employee = require("./lib/employee");
let Engineer = require("./lib/engineer");
let Manager = require("./lib/manager");
let Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");

const initQuestions = [
  {
    type: "input",
    message: " What is the Team Managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is their employee ID?",
    name: "managerID",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is their Office Number?",
    name: "managerOfficeNumber",
  },
  {
    type: "list",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    message: "What would you like to do next?",
    name: "nextStep",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: " What is the Engineers name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is their employee ID?",
    name: "engineerID",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is their Github Username?",
    name: "github",
  },
  {
    type: "list",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    message: "What would you like to do next?",
    name: "nextStep",
  },
];
const internQuestions = [
  {
    type: "input",
    message: " What is the interns name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is their employee ID?",
    name: "internID",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is their School?",
    name: "internSchool",
  },
  {
    type: "list",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    message: "What would you like to do next?",
    name: "nextStep",
  },
];
const employeesAdded = [];

const init = () => {
  inquirer
    .prompt(initQuestions)
    .then((data) => {
      const renderManager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.managerOfficeNumber
      );
      employeesAdded.push(renderManager);
      console.log("Employee added successfully");
      //
    })
    .catch((err) => console.log("employee error"));
};

// fs.appendFile("./dis/src.html", renderManager.generateCard(), function(err){
// if (err) throw err;
// })
init();
