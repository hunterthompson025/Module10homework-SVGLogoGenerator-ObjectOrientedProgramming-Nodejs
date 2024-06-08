const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument} = require('./document.js');
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

class Shapes {
    constructor() {
      this.logo = logo;
      this.color = color
      this.shape = shape;    
    }
    addShape() {
        return inquirer
          .prompt([
            {
                type: 'input',
                name: 'logo',
                message: 'Enter the text for your Logo'
            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter the color of your Logo'
            },
            {
                type: 'list',
                name: 'shape',
                choices: ['triangle, circle, square'],
            },
          ])
          .then(({ logo, color, shape }) => {
            this.shapes.push({ logo, color, shape});
            return this.addShape();
          })
          .then(() => {
            return writeFile(
              join(__dirname,'..' 'examples', `${shape}.svg`),
              createDocument(this.logo, this.color, this.shape)
            );
          })
          .then(()=> console.log(`Created ${shape}.svg`))
          .catch((err) => {
            console.log(err);
            console.log('Something went wrong, please try again.');
          }); 
    }
}

module.exports = Shapes;