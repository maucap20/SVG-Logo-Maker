const { Circle, Triangle, Square } = require("./lib/shapes");

// Common render tests for all shapes
describe("Shapes", () => {
  const testCases = [
    {
      shapeClass: Circle,
      expectedRender: '<circle cx="150" cy="100" r="80" fill="purple" />',
      color: "purple",
    },
    {
      shapeClass: Triangle,
      expectedRender:
        '<polygon points="150,10 250,190 50,190" fill="orange" />',
      color: "orange",
    },
    {
      shapeClass: Square,
      expectedRender: '<rect x="50" width="200" height="200" fill="blue" />',
      color: "blue",
    },
  ];

  testCases.forEach(({ shapeClass, expectedRender, color }) => {
    it(`should render a ${color} ${shapeClass.name.toLowerCase()}`, () => {
      const shape = new shapeClass();
      shape.setColor(color);
      expect(shape.render()).toEqual(expectedRender);
    });
  });
});
