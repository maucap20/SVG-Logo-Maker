// Parent class for all shapes
class Shape {
  constructor(letters = "", textColor = "", shapeColor = "") {
    this.letters = letters; // Text inside the shape
    this.textColor = textColor; // Color of the text
    this.shapeColor = shapeColor; // Color of the shape
  }

  // Method to set shape color for consistency with older methods
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  // Renders text inside the shape
  getText() {
    return `<text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>`;
  }

  // Render function to be overridden by subclasses
  render() {
    throw new Error("Render method must be implemented by subclass!");
  }
}

// Circle subclass
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${
      this.shapeColor
    }" />${this.getText()}`;
  }
}

// Triangle subclass
class Triangle extends Shape {
  render() {
    return `<polygon points="150,10 250,190 50,190" fill="${
      this.shapeColor
    }" />${this.getText()}`;
  }
}

// Square subclass
class Square extends Shape {
  render() {
    return `<rect x="50" width="200" height="200" fill="${
      this.shapeColor
    }" />${this.getText()}`;
  }
}

// Export the shape and its subclasses
module.exports = { Shape, Circle, Triangle, Square };
