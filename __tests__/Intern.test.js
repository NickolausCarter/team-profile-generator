const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Nick', 1, 'nickolaus.carter81@gmail.com', 'Intern', 'UT Austin');

  expect(intern.name).toBe('Nick');
  expect(intern.id).toBe('1');
  expect(intern.email).toBe('nickolaus.carter81@gmail.com');
  expect(intern.school).toBe('UT Austin');
});

test("gets intern's school", () => {
  const intern = new Intern('Nick', 1, 'nickolaus.carter81@gmail.com', 'Intern', 'UT Austin');
  
  expect(intern.getSchool()).toEqual(expect.stringContaining('UT Austin'));
});

test("gets intern's role", () => {
  const intern = new Intern('Nick', 1, 'nickolaus.carter81@gmail.com', 'Intern', 'UT Austin');
  
  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});