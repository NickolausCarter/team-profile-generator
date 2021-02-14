const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Nick', 1, 'nickolaus.carter81@gmail.com', 'Employee');

  expect(employee.name).toBe('Nick');
  expect(employee.id).toBe('1');
  expect(employee.email).toBe('nickolaus.carter81@gmail.com');
});

test("gets employee's name", () => {
  const employee = new Employee('Nick', 1, 'nickolaus.carter81@gmail.com', 'Employee');

  expect(employee.getName()).toEqual(expect.stringContaining('Nick'));
});

test("gets employee's ID", () => {
  const employee = new Employee('Nick', 1, 'nickolaus.carter81@gmail.com', 'Employee');

  expect(employee.getId()).toEqual(expect.stringContaining('1'));
})

test("gets employee's email", () => {
  const employee = new Employee('Nick', 1, 'nickolaus.carter81@gmail.com', 'Employee');

  expect(employee.getEmail()).toEqual(expect.stringContaining('nickolaus.carter81@gmail.com'));
})

test("gets employee's role", () => {
  const employee = new Employee('Nick', 1, 'nickolaus.carter81@gmail.com', 'Employee');
  
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})