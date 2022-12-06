const fs = require("fs");

let data = fs.readFileSync("./data.txt", "utf-8");

let puzzleInput = data.split("\n");

let currentElfCaloriesSum = 0;
let mostCalories = 0;

const getMostCalories = () => {
  puzzleInput.forEach((input) => {
    if (input == "") {
      if (currentElfCaloriesSum > mostCalories) {
        mostCalories = currentElfCaloriesSum;
      }
      currentElfCaloriesSum = 0;
    } else {
      currentElfCaloriesSum += parseInt(input);
    }
  });
    
    return mostCalories;
};

console.log(getMostCalories());

