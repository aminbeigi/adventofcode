import { readFileSync } from "fs";

const processInputFile = (filePath: string): string[] => {
  return readFileSync(filePath, { encoding: "utf-8" }).trim().split("\n");
};

const part1 = (): number => {
  const getCalibration = (line: string): number => {
    const digitLine = line.replace(/[^\d]/g, "");
    return Number(digitLine[0] + digitLine.slice(-1));
  };

  const totalCalibration = processInputFile("input.txt")
    .map(getCalibration)
    .reduce((sum, calibration) => sum + calibration, 0);

  return totalCalibration;
};

console.log(part1());
