//const Circle = require('./circle.js');
//const Square = require('./square.js');
//const Triangle = require('./triangle.js');

function createDocument(logo, color, shape) {
    const variable = new Variable().render();
    const variable2 = shape.map(
        (s) => new variable2([s.logo, s.color])
    );
    const variable3 = new Variable3(Variable2).render();

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <${shape} fill=${shapecolor} />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${logo}</text>

    </svg>
    `
}