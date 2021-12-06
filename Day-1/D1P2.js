import { open } from "node:fs/promises";

const fd = await open("./D1-input.txt");
const text = await fd.readFile("utf8");
const nums = text.split("\n");

const numOfIncreases = nums.reduce((acc, num, i, arr) => {
  const window1 = Number(arr[i - 1]) + Number(num) + Number(arr[i + 1]);
  const window2 = Number(num) + Number(arr[i + 1]) + Number(arr[i + 2]);

  if (window1 < window2) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numOfIncreases);
