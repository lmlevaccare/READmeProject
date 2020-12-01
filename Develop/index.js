

const inquirer = require('inquirer');
const util = require('util');
let fs = require('fs');
const writeFileAsync = util.promisify(fs.writeFile);





const promptReadMe = () =>
 inquirer.prompt([
    
    {
           // Title   
        type: 'input',
        message: 'What is the title of your project',
        name: 'Title',
    },
    //  Description of Project
    {
        type: 'input',
        message: 'Please, describe your project.',
        name: 'Description',
    },

    // Installation
    {
        type: 'input',
        message: 'What steps are needed to install your project?',
        name: 'Installation',
    },
    // Usage
    {
        type: 'input',
        message: 'Describe the usage/functionality of your project?',
        name: 'Usage',
    },
  
    {
        type: 'list',
        message: 'Which open source software license was used on your project?',
        name: 'License',
        choices: ['LGPL', 'ISC', 'MIT', 'GPL', 'Apache', 'BSD', 'Public-Domain', 'GNU']
        
    },

    // Contributing
    {
        type: 'input',
        message: 'Please list the names of any other contributors on your project.',
        name: 'Contributors',
            
    },
    // Tests
    {
        type: 'input',
        message: 'How did you demo/test or run your project?',
        name: 'Test',
     },
    
        
    // GITHUB User prompt
    // {
    //     type: 'input',
    //     message: 'What is your Github username? ',
    //     name: 'Github',
    // },
        
    // // Email User prompt
    // {
    //     type: 'input',
    //     message: 'What is your email?',
    //     name: 'Email',
    // },

    {
        type: 'list',
        message: 'Do you have further questons regarding this project',
        name: 'Questions',
        choices: ['YES, I have further questions', 'NO, I do not have further questions']
    }

])


const generateReadMe = (data) => {
    return `
###README.md Generator

## Table of Contents
* [Title](#title)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)



## Project Title
${data.Title}

## Description
${data.Description}

## Installation
${data.Installation}

## Usage 
${data.Usage}

## License
${data.License}
[MIT License](https://opensource.org/licenses/MIT);

## Contributors        
${data.Contributors}

## Test
${data.Test}
        
## Questions
${data.Questions}


## For questions regarding my project you can check out my Github profile or contact me via email.
Please see following links:
[Github, Profile](https://github.com/lmlevaccare);
[Email](https://laurenlevaccare@icloud.com);
`;   
};

  
promptReadMe ()
.then((data) => writeFileAsync('README.md', generateReadMe(data)))
.then(() => console.log('Success!'))
.catch((err) => console.error(err));
  

