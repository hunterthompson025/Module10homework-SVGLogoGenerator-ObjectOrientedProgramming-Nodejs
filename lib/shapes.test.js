const Triangle = require('./triangle.js');

describe('Triangle', () => {
    it('should correctly set the color', () => {
        const color = 'blue';
        const triangle = new Triangle(color);
        expect(triangle.color).toBe(color);
    });

    it('should render the correct SVG', () => {
        const color = 'green';
        const triangle = new Triangle(color);
        const expectedSvg = `<polygon points="150,25 225,175 75,175" fill="${color}" />`;
        expect(triangle.render()).toBe(expectedSvg);
    });
});

const Circle = require('./circle.js');

describe('Circle', () => {
    it('should correctly set the color', () => {
        const color = 'blue';
        const circle = new Circle(color);
        expect(circle.color).toBe(color);
    });

    it('should render the correct SVG', () => {
        const color = 'green';
        const circle = new Circle(color);
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
        expect(circle.render()).toBe(expectedSvg);
    });
});

const Square = require('./square.js');

describe('square', () => {
    it('should correctly set the color', () => {
        const color = 'blue';
        const square = new Square(color);
        expect(square.color).toBe(color);
    });

    it('should render the correct SVG', () => {
        const color = 'green';
        const square = new Square(color);
        const expectedSvg = `<rect x="75" y="50" width="150" height="150" fill="${color}" />`;
        expect(square.render()).toBe(expectedSvg);
    });
});