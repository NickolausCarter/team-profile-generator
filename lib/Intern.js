const Employee = require('./Employee');

class Intern extends Employee {

  constructor(name, id, email, role = 'Intern', school) {
    super(name, id, email);
    this.role = role;
    this.school = school;
  };

  getSchool() {
    return `This ${this.role}'s school is ${this.school}.`
  }
};

module.exports = Intern;