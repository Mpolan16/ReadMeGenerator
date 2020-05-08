function generateMarkdown(data, githubUser) {
  return `
# ${data.projectName}
![badge](https://img.shields.io/badge/License-${data.license}-blue)

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* Usage

* License

* Contributing

* Tests

* Questions

## Installation

\`\`\`${data.command}\`\`\`

## Usage
${data.repoInfo}

## License
 This project is licensed under ![badge](https://img.shields.io/badge/License-${data.license}-blue).

## Contributing
${data.contributing}

## Tests
 
To run tests, run the following command:

\`\`\`${data.test}\`\`\`

## Questions

![picture of developer](${githubUser.avatar})

Email: ${githubUser.email}
`;
}

module.exports =  generateMarkdown;
