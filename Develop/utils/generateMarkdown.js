// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {  
  return `
# ${data.title}
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
## Description
  ${data.description}

## Table of Contents
  - [Description](#description)
  - [Instalation](#instalation)
  - [Usage](#usage)
  - [License](#license)  
  - [Tests](#tests)
  - [Questions](#questions)

## Instalation
  ${data.instalation}

## Usage
  ${data.usage}

## License
  This project uses the following licenses: ${data.license}

## Tests
  ${data.tests}

## Questions
  Github: [my repo](https://github.com/${data.github})
  <br>
  ${data.questions}
  <br>
  Feel free to contact at the following email: 
  ${data.email}
`;
}

module.exports = generateMarkdown;
