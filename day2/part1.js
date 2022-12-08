const fs = require('fs');
const confrontationData = [];
fs.readFile("data.txt", "utf8", function (err, data) {
  const content = data;
  //  let mainArraySplit= content.toString().split("\n")
  let mainArraySplit = content
    .toString()
    .split("\n")
    .map((item) => {
      const tour = item.split(" ");
      confrontationData.push({
        opponent: tour[0],
        me: tour[1],
      });
    });

  let sumScore = 0;

  confrontationData.map((item) => {
    if (
      (item.me === "Z" && item.opponent === "B") ||
      (item.me === "Y" && item.opponent === "A") ||
      (item.me === "X" && item.opponent === "C")
    ) {
      if (item.me === "X") sumScore = sumScore + 7;
      else if (item.me === "Y") sumScore = sumScore + 8;
      else if (item.me === "Z") sumScore = sumScore + 9;
      console.log("ME ", item.me + " " + sumScore);
    } else if (
      (item.me === "X" && item.opponent === "B") ||
      (item.me === "Y" && item.opponent === "C") ||
      (item.me === "Z" && item.opponent === "A")
    ) {
      if (item.me === "X") sumScore = sumScore + 1;
      else if (item.me === "Y") sumScore = sumScore + 2;
      else if (item.me === "Z") sumScore = sumScore + 3;
      console.log("ME ", item.me + " " + sumScore);
    } else if (
      (item.me === "X" && item.opponent === "A") ||
      (item.me === "Y" && item.opponent === "B") ||
      (item.me === "Z" && item.opponent === "C")
    ) {
      if (item.me === "X") sumScore = sumScore + 4;
      else if (item.me === "Y") sumScore = sumScore + 5;
      else if (item.me === "Z") sumScore = sumScore + 6;
      console.log("ME ", item.me + " " + sumScore);
    }

    return sumScore;
  });
  
});