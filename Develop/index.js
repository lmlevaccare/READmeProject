

const inquirer = require('inquirer');
// const requireStack = require('require-stack/src');
const util = require('util');

let path = require('path');
let fs = require('fs');


 inquirer.prompt([
    
    {


        //     // Title   
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
    
    // // Table of Contents
    // {
    //     type: 'list',
    //     message: 'select ',
    //     name: 'location',
    //     choices: ['chciago', 'denver', 'mississppi']
    // },

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
        choices: ['LGPL', 'No License', 'MIT License', 'GPL', 'Apache License', 'BSD License', 'Public Domain', 'GNU']
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
    {
        type: 'input',
        message: 'What is your Github username? ',
        name: 'Github',
    },
        
    // Email User prompt
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
    },

    {
        type: 'list',
        message: 'Do you have further questons regarding this project',
        name: 'Questions',
        choices: ['YES', 'NO']
    }

])
    // .then((data) => {
    //     return `${data.Description}
    //     ## Installation
    //     ${data.Installation}
    //     ## Usage 
    //     ${data.Usage}
    //      ${data.License}
    //     ${data.Contributors}
    //     ${data.Test}
    //     ${data.Github}
    //   ${data.Email} `;

    // })

function generate(data) {
    then((data) => {
        return `${data.Description}
        ## Installation
        ${data.Installation}
        ## Usage 
        ${data.Usage}
         ${data.License}
        ${data.Contributors}
        ${data.Test}
        ${data.Github}
      ${data.Email} `;
    
    
    
    })

    fs.writeFile(path.join(__dirname, '/Develop', 'README.me'), function (err)  {
        if (err) throw err;
        console.log('file created...');
       
    
    
    
    }
    )
}