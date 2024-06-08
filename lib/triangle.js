const Shape = require('./shapes')

class Triangle extends Shape {
    render() {
        return `polygon points="150, 18 244, 182 56, 182"`
    }
}

module.exports = Triangle;

