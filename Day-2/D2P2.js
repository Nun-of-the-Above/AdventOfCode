//Read input from external txt-file given from AdventOfCode
import { open } from "node:fs/promises";
const fd = await open("./D2-input.txt");
const input = await fd.readFile("utf8");
const data = input.split("\n");

const processedData = data.map((el) => {
  const parts = el.split(" ");
  return [parts[0], parts[1]];
});

//Counter variables
let horizontalValue = 0;
let depthValue = 0;
let aim = 0;

processedData.forEach((directionValuePair) => {
  const direction = directionValuePair[0];
  const value = Number(directionValuePair[1]);

  if (direction === "forward") {
    horizontalValue += value;
    depthValue += value * aim;
  }

  if (direction === "down") aim += value;

  if (direction === "up") aim -= value;
});

console.log("Horizontal: ", horizontalValue);
console.log("Depth: ", depthValue);
console.log("Multiplied: ", horizontalValue * depthValue);
