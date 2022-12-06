const fs = require("fs");

let data = fs.readFileSync("./data.txt", "utf-8");

let puzzleInput = data.split("\n");

let currentElfCaloriesSum = 0;
let mostCalories = 0;
let caloriesPerElf = [];

const getMostCalories = () => {
  puzzleInput.forEach((input) => {
    if (input == "") {
      if (currentElfCaloriesSum > mostCalories) {
        mostCalories = currentElfCaloriesSum;
      }
      currentElfCaloriesSum = 0;
    } else {
      currentElfCaloriesSum += parseInt(input);
      caloriesPerElf.push(currentElfCaloriesSum);
    }
  });

  return mostCalories;
};

console.log(getMostCalories());

const getThreeFirstElves = () => {
  let sortedCaloriesPerElf = [...caloriesPerElf].sort((a, b) => b - a);
  let sumOfTheFirstThreeElves =
    sortedCaloriesPerElf[0] + sortedCaloriesPerElf[1] + sortedCaloriesPerElf[2];

  return sumOfTheFirstThreeElves;
};

console.log(getThreeFirstElves());
