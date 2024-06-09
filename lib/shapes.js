class Shape {
  constructor(color) {
      this.color = color;
  }

  render() {
      throw new Error('Render method must be implemented by subclasses');
  }
}

module.exports = Shape;
