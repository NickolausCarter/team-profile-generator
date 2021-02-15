const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = require('./src/page-template');

const employeeArr = [];
let count = 0;

function launchApp() {
  // only runs first time per instance the app is launched
  if (count === 0) {
    count++;
    console.log('\nWelcome to the Team Profile Generator!');
    console.log('======================================\n');
    
    initialPrompt();
    
    
  } else { // runs only after one team member has already been added
    inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'confirmContinue',
        message: 'Would you like to add another member to this team?',
        default: true
      }
    ])
    .then(answer => {
      // confirms user wants to add additional team members
      if (answer.confirmContinue === true) {
        console.log("\nPlease enter the next team member's data")
        console.log('========================================\n');
        initialPrompt();
      } else {
        return writeHTML();
      }
    });
  }
};
// ask the three basic questions applicable to all team members
function initialPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this team member?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You must provide a name for this team member.');
            return false;
          }
        } 
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please provide the employee ID for this team member.',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('You must provide an ID for this team member.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide the email address for this team member.',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You must provide an email address for this team member.');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'role',
        message: 'Please choose which role this employee will fill:',
        choices: ['Manager', 'Engineer', 'Intern'],
      }
    ])
    .then(answers => {
      if (answers.role === 'Manager') {
        console.log('\nPlease answer the following questions about this Manager:')
        console.log('=========================================================\n');
        managerPrompt(answers);
      } else if (answers.role === 'Engineer') {
        console.log('\nPlease answer the following questions about this Engineer:')
        console.log('==========================================================\n');
        engineerPrompt(answers);
      } else {
        console.log('\nPlease answer the following questions about this Intern:')
        console.log('========================================================\n');
        internPrompt(answers);
      }
    });
}

// ask manager specific question add new manager object to employeeArr
function managerPrompt(data) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'officeNumber',
        message: "Please provide the manager's office number.",
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please provide an office number.');
            return false;
          }
        }
      }
    ])
    .then((answer) => {
      const { name, id, email, role } = data;
      const { officeNumber } = answer;
      const manager = new Manager(name, id, email, role, officeNumber);
      employeeArr.push(manager);
      console.log(employeeArr)
    })
    .then( () => {
      launchApp();
    });
};

// ask engineer specific question add new engineer object to employeeArr
function engineerPrompt(data) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'github',
        message: "Please provide the engineer's GitHub username.",
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please provide a GitHub username.');
            return false;
          }
        }
      }
    ])
    .then((answer) => {
      const { name, id, email, role } = data;
      const { github } = answer;
      const engineer = new Engineer(name, id, email, role, github);
      employeeArr.push(engineer);
    })
    .then( () => {
      launchApp();
    });
};

// ask intern specific question add new intern object to employeeArr
function internPrompt(data) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'school',
        message: "Please provide the name of the intern's school.",
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please provide a school name.');
            return false;
          }
        }
      }
    ])
    .then((answer) => {
      const { name, id, email, role } = data;
      const { school } = answer;
      const intern = new Intern(name, id, email, role, school);
      employeeArr.push(intern);
    })
    .then( () => {
      launchApp();
    });
};

function writeHTML() {
  console.log(`writeHTML: ${employeeArr[0]}`)
  const pageHTML = generateHTML(employeeArr);

  fs.writeFile('./dist/index.html', pageHTML, err => {
    if (err) throw new Error(err);
    console.log('\nYour team page has been created in the dist folder!');
  });

  fs.copyFile('./src/style.css', './dist/style.css', err => {
    if (err) throw new Error(err);
    console.log('\nStyle sheet copied to dist folder!');
  })
};

launchApp()
