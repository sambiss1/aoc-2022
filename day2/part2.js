const fs = require("fs");

const confrontationData = [];
fs.readFile("data.txt", "utf8", function (err, data) {
  const content = data;
  //  let mainArraySplit= content.toString().split("\n")
  //   let mainArraySplit = content.toString().split("\n");

  let mainArraySplit = content
    .toString()
    .split("\n")
    .map((item) => {
      const tour = item.split(" ");
      confrontationData.push({
        adversaire: tour[0],
        me: tour[1],
      });
    });
  let sumScorePart2 = 0;

  confrontationData.map((item) => {
    if (item.me === "Z") {
      if (item.adversaire === "A") sumScorePart2 = sumScorePart2 + 8;
      else if (item.adversaire === "B") sumScorePart2 = sumScorePart2 + 9;
      else if (item.adversaire === "C") sumScorePart2 = sumScorePart2 + 7;
    } else if (item.me === "X") {
      if (item.adversaire === "A") sumScorePart2 = sumScorePart2 + 3;
      else if (item.adversaire === "B") sumScorePart2 = sumScorePart2 + 1;
      else if (item.adversaire === "C") sumScorePart2 = sumScorePart2 + 2;
    } else if (item.me === "Y") {
      if (item.adversaire === "A") sumScorePart2 = sumScorePart2 + 4;
      else if (item.adversaire === "B") sumScorePart2 = sumScorePart2 + 5;
      else if (item.adversaire === "C") sumScorePart2 = sumScorePart2 + 6;
    }

    return sumScorePart2;
  });

  console.log("RESULTAT ", sumScorePart2);
});
