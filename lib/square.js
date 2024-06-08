const Shape = require('./shapes')

class Square extends Shape {
    render() {
        return `rect x="75" y="35" width="150" height="150"`
    }
}

module.exports = Square;