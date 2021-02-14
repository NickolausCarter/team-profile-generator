const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Nick', 1, 'nickolaus.carter81@gmail.com', 'Manager', '254-555-5555');

  expect(manager.name).toBe('Nick');
  expect(manager.id).toBe('1');
  expect(manager.email).toBe('nickolaus.carter81@gmail.com');
  expect(manager.officeNumber).toBe('254-555-5555');
});

test("gets manager's role", () => {
  const manager = new Manager('Nick', 1, 'nickolaus.carter81@gmail.com', 'Manager', '254-555-5555');
  
  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});