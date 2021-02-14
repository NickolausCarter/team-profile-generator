class Employee {

  constructor(name, id, email, role = 'Employee') {
    this.name = name;
    this.id = id.toString();
    this.email = email;
    this.role = role;
  }

  getName() {
    return `The employee's name is ${this.name}.`
  }

  getId() {
    return `The employee's ID is ${this.id}.`
  }

  getEmail() {
    return `The employee's email is ${this.email}.`
  }

  getRole() {
    return `The employee's current role is ${this.role}`
  }
}

module.exports = Employee