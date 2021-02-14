const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Nick', 1, 'nickolaus.carter81@gmail.com', 'Engineer', 'nickolauscarter');

  expect(engineer.name).toBe('Nick');
  expect(engineer.id).toBe('1');
  expect(engineer.email).toBe('nickolaus.carter81@gmail.com');
  expect(engineer.github).toBe('nickolauscarter');
});

test("gets engineer's github", () => {
  const engineer = new Engineer('Nick', 1, 'nickolaus.carter81@gmail.com', 'Engineer', 'nickolauscarter');
  
  expect(engineer.getGithub()).toEqual(expect.stringContaining('nickolauscarter'));
});

test("gets engineer's role", () => {
  const engineer = new Engineer('Nick', 1, 'nickolaus.carter81@gmail.com', 'Engineer', 'nickolauscarter');
  
  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});