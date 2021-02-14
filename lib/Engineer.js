const Employee = require('./Employee');

class Engineer extends Employee {

  constructor(name, id, email, role = 'Engineer', github) {
    super(name, id, email);
    this.role = role;
    this.github = github;
  };

  getGithub() {
    return `This ${this.role}'s github is https://github.com/${this.github}.`
  }
};

module.exports = Engineer;