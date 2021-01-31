//module imports
let Engineer = require("./lib/engineer");
let Manager = require("./lib/manager");
let Intern = require("./lib/intern");
const generateHtml = require("./src/html-template");
const inquirer = require("inquirer");
const fs = require("fs");

// initial array of questions to create manager profile
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
// array of questions to create engineer profile
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
//array of questions to create intern profile
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

// empty array that takes employee cards once they have been created
const employeesAdded = [];

// function to call inquirer, ask manager questions and store the answers
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
  
  // function to call inquirer, ask engineer questions and store the answers
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
    
    // function to call inquirer, ask intern questions and store the answers
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
// when the user finishes entering employees the html file is created
const createFile = async () => {
  await fs.promises.writeFile(
    "dist/employees.html",
    generateHtml(employeesAdded.join()),
    "utf8"
  );
  console.log("file created");
};
// function to flow through the inquirer question arrays until the user chooses to finish building their team
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
// initializes the program and calls generateWebpage to cue inquirer questions
const init = () => {
  generateWebpage();
};
// begins the inline command prompts
init();
