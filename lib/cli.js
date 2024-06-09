const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document.js');

class CLI {
    constructor() {
        this.logo = '';
        this.textcolor = '';
        this.shape = '';
        this.shapecolor = '';
    }
    
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'logo',
                    message: 'Enter the text for your Logo (Must not be more than 3 characters)',
                    validate: input => input.length <= 3 || 'Logo must not be more than 3 characters.'
                },
                {
                    type: 'input',
                    name: 'textcolor',
                    message: 'Enter the color of the text in your Logo'
                },
            ])
            .then(({ logo, textcolor }) => {
                this.logo = logo;
                this.textcolor = textcolor;
                return this.addShape();
            })
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'examples', `logo.svg`),
                    createDocument(this.logo, this.textcolor, this.shape, this.shapecolor)
                );
            })
            .then(() => console.log(`Gerenated logo.svg`))
            .catch((err) => {
                console.error(err);
                console.log('Something went wrong, please try again.');
            });
    }

    addShape() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape for your Logo',
                    choices: ['triangle', 'circle', 'square']
                },
                {
                    type: 'input',
                    name: 'shapecolor',
                    message: 'Enter the color of the shape in your Logo'
                },
            ])
            .then(({ shape, shapecolor }) => {
                this.shape = shape;
                this.shapecolor = shapecolor;
            });
    }
}

module.exports = CLI;
