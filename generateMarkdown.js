function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description

${data.description}

## Table of Contents

* Installation

* Usage

* License

* Contributing

* Tests

* Questions

## Installation

${data.command}

## Usage
${data.repoInfo}

## Contributing
${data.contributing}

`;
}

module.exports = { generateMarkdown };
