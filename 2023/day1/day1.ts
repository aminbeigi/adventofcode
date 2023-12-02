import { readFileSync } from "fs";

const processInputFile = (filePath: string): string[] => {
  return readFileSync(filePath, { encoding: "utf-8" }).trim().split("\n");
};

const part1 = (): number => {
  const getCalibration = (line: string): number => {
    const digitLine = line.replace(/[^\d]/g, "");
    return Number(digitLine[0] + digitLine[digitLine.length - 1]);
  };

  const input = processInputFile("input.txt");

  const res = input
    .map((line) => getCalibration(line))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return res;
};
