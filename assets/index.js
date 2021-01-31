let Employee = require("./lib/employee");
let Engineer = require("./lib/engineer");
let Manager = require("./lib/manager");
let Intern = require("./lib/intern");
const generateHtml = require("./lib/src/html-template");
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

const askManagerQuestions = async () => {
  const data = await inquirer.prompt(initQuestions);

  const renderManager = new Manager(
    data.managerName,
    data.managerID,
    data.managerEmail,
    data.managerOfficeNumber
  );
  employeesAdded.push(renderManager.generateCard());
  console.log("Manager added successfully");

  return data;
};

const askEngineerQuestions = async () => {
  const data = await inquirer.prompt(engineerQuestions);

  const renderEngineer = new Engineer(
    data.engineerName,
    data.engineerID,
    data.engineerEmail,
    data.github
  );
  employeesAdded.push(renderEngineer.generateCard());
  console.log("Engineer added successfully");

  return data;
};

const askInternQuestions = async () => {
  const data = await inquirer.prompt(internQuestions);

  const renderIntern = new Intern(
    data.internName,
    data.internID,
    data.internEmail,
    data.internSchool
  );
  employeesAdded.push(renderIntern.generateCard());
  console.log("Intern added successfully");

  return data;
};

const createFile = async () => {
  await fs.promises.writeFile(
    "dist/employees.html",
    generateHtml(employeesAdded.join()),
    "utf8"
  );
  console.log("file created");
};

const generateWebpage = async () => {
  let inquirerAnswers = await askManagerQuestions();
  while (inquirerAnswers.nextStep !== "Finish building the team") {
    if (inquirerAnswers.nextStep === "Add an engineer") {
      inquirerAnswers = await askEngineerQuestions();
    }
    if (inquirerAnswers.nextStep === "Add an intern") {
      inquirerAnswers = await askInternQuestions();
    }
  }
  try {
    await createFile();
  } catch (error) {
    console.error("Error creating file", error);
  }
};

const init = () => {
  generateWebpage();
};

init();
