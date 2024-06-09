const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument} = require('./document.js');

class Shapes {
    constructor() {
      if (logo.lenth > 4) {
        throw new Error ('`logo` must be less than 4 characters.');
      }
      this.logo = logo;
      this.textcolor = textcolor;
      this.shape = shape;
      this.shapecolor = this.shapecolor;    
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
                name: 'textcolor',
                message: 'Enter the color of the text in your Logo'
            },
            {
                type: 'list',
                name: 'shape',
                choices: ['triangle, circle, square'],
            },
            {
              type: 'input',
              name: 'shapecolor',
              message: 'Enter the color of the shape in your Logo'
            },
          ])
          .then(({ logo, textcolor, shape, shapecolor }) => {
            this.shapes.push({ logo, textcolor, shape, shapecolor});
            return this.addShape();
          })
          .then(() => {
            return writeFile(
              join(__dirname,'..', 'examples', `${shape}.svg`),
              createDocument(this.logo, this.textcolor, this.shapecolor, this.shape)
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