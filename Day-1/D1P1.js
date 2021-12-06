import { open } from "node:fs/promises";

const fd = await open("./D1-input.txt");
const input = await fd.readFile("utf8");

const nums = input.split("\n");

const numOfIncreases = nums.reduce((acc, num, i, arr) => {
  if (arr[i - 1] < num) {
    return (acc = acc + 1);
  }
  return acc;
}, 1);

console.log(numOfIncreases);
