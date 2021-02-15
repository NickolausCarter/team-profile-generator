// generates icon based on team member role
const generateRoleIcon = role => {

  if (role === 'Manager') {
    const roleIcon = `<i class="fas fa-mug-hot"></i>`;
    return roleIcon;
  } else if (role === 'Engineer') {
    const roleIcon = `<i class="fas fa-glasses"></i>`;
    return roleIcon;
  } else {
    const roleIcon = `<i class="fas fa-user-graduate"></i>`;
    return roleIcon;
  }
};

// identifies unique data and adds to generateCard data
const uniqueInfo = employee => {
  if (employee.getRole() === 'Manager') {
    return `
    Office Number: ${employee.officeNumber}
    `
  } else if (employee.getRole() === 'Engineer') {
    return `
    GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>
    `
  } else {
    return `
    School: ${employee.getSchool()}
    `
  }
};

// loop through employeeArr and create cards
const generateCard = employee => {
  let html = '';
  for (let i = 0; i < employee.length; i++) {
    
    html += `
        <div class="card m-2" style="width: 18rem;">
          <div class="card-header bg-primary text-light">
            <p>${employee[i].getName()}</p>
            <p>${generateRoleIcon(employee[i].getRole())} ${employee[i].getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
            <li class="list-group-item">${uniqueInfo(employee[i])}</li>
          </ul>
        </div>
    `
  }
  return html;
};

// generate the HTML for file creation
const generateHTML = (employeeArr) => {
  if (!employeeArr) {
    return '';
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <nav class="text-center bg-dark text-light py-2">
      <h1>My Team</h1>
    </nav>

    <main class="container d-flex flex-wrap justify-content-center">
      ${generateCard(employeeArr)}
    </main>
  
</body>
</html>
  `
};

module.exports = generateHTML;