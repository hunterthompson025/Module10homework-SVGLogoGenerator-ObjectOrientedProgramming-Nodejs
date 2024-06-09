const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,25 225,175 75,175" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
