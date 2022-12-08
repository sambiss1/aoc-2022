const fs = require("fs");

const confrontationData = [];
fs.readFile("data.txt", "utf8", function (err, data) {
  const content = data;
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

  let sumScore = 0;

  const list = [];
  confrontationData.map((tour) => {
    const result = checkTour(tour);
    list.push(result);
  });

  confrontationData.map((item) => {
    if (
      (item.me === "Z" && item.adversaire === "B") ||
      (item.me === "Y" && item.adversaire === "A") ||
      (item.me === "X" && item.adversaire === "C")
    ) {
      if (item.me === "X") sumScore = sumScore + 7;
      else if (item.me === "Y") sumScore = sumScore + 8;
      else if (item.me === "Z") sumScore = sumScore + 9;
    } else if (
      (item.me === "X" && item.adversaire === "B") ||
      (item.me === "Y" && item.adversaire === "C") ||
      (item.me === "Z" && item.adversaire === "A")
    ) {
      if (item.me === "X") sumScore = sumScore + 1;
      else if (item.me === "Y") sumScore = sumScore + 2;
      else if (item.me === "Z") sumScore = sumScore + 3;
    } else if (
      (item.me === "X" && item.adversaire === "A") ||
      (item.me === "Y" && item.adversaire === "B") ||
      (item.me === "Z" && item.adversaire === "C")
    ) {
      if (item.me === "X") sumScore = sumScore + 4;
      else if (item.me === "Y") sumScore = sumScore + 5;
      else if (item.me === "Z") sumScore = sumScore + 6;
    }

    return sumScore;
  });

  console.log("RESULTAT ", list);
});
