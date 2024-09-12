// Include necessary packages
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// Define the questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for your logo (up to 3 characters):",
    // Ensure the text input is 1-3 characters
    validate: (input) => {
      const length = input.trim().length;
      if (length === 0) {
        return "Please enter at least 1 character.";
      } else if (length > 3) {
        return "Please enter no more than 3 characters.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the color for your text (keyword or hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your logo:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the color for your shape (keyword or hexadecimal):",
  },
];

// Generate the SVG content based on the user's input
function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeObject;

  // Select the shape based on user input
  switch (shape) {
    case "Circle":
      shapeObject = new Circle();
      break;
    case "Triangle":
      shapeObject = new Triangle();
      break;
    case "Square":
      shapeObject = new Square();
      break;
  }

  // Set the color of the shape
  shapeObject.setColor(shapeColor);

  // Return the full SVG as a string
  return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeObject.render()}
      <text x="150" y="${
        shape === "Triangle" ? 160 : shape === "Circle" ? 125 : 115
      }" 
      font-size="60" text-anchor="middle" fill="${textColor}">
        ${text}
      </text>
    </svg>`;
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the SVG string based on user input
    const svgContent = generateSVG(answers);

    // Write the SVG string to a file
    fs.writeFile("logo.svg", svgContent, (err) => {
      if (err) {
        console.error("Error generating logo:", err);
      } else {
        console.log(
          "SVG logo generated successfully! Check out the logo.svg file."
        );
      }
    });
  });
}

// Start the application
init();
