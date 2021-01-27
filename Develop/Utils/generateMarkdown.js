
function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [Questions](#Questions)
  * [License](#License)
  * 
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Questions
  ${data.questions}
  ## License
  ${data.license}
  ## Questions
  Contact Information
  Github [${data.username}](https://github.com/${data.username})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;