const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createDocument(logo, textcolor, shape, shapecolor) {
    let shapeElement;

    switch (shape.toLowerCase()) {
        case 'circle':
            shapeElement = new Circle(shapecolor).render();
            break;
        case 'square':
            shapeElement = new Square(shapecolor).render();
            break;
        case 'triangle':
            shapeElement = new Triangle(shapecolor).render();
            break;
        default:
            throw new Error(`Unknown shape: ${shape}`);
    }

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${logo}</text>
    </svg>
    `;
}

module.exports = { createDocument };
