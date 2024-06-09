const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document.js');

class CLI {
    constructor() {
        if (logo.lenth > 4) {
            throw new Error('logo must not be more than 3 characters.');
        }
        this.logo = logo;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = this.shapecolor;
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'logo',
                    message: 'Enter the text for your Logo (Must not be more than 3 characters)'
                },
                {
                    type: 'input',
                    name: 'textcolor',
                    message: 'Enter the color of the text in your Logo'
                },
            ])
            .then(({ logo, textcolor }) => {
              this.logo = logo;
              this.textcolor = textcolor
              return this.addShape();
            })
            .then(() => {
              return writeFile(
                join(__dirname, '..', 'examples', `${shape}.svg`),
                createDocument(this.logo, this.textcolor, this.shapecolor, this.shape)
              );
            })
            .then(() => console.log(`Created ${shape}${logo}.svg`))
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong, please try again.');
            });
    }
    
    addShape() {
    return inquirer
        .prompt([
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
        .then(({ shape, shapecolor }) => {
            this.shapes.push({ shape, shapecolor });
            return this.addShape();
        });
    }
}
 
    

module.exports = CLI;