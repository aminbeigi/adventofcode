import { processInputFile } from "../utils.js";

const getCalibration = (line: string): number => {
  const digitLine = line.replace(/[^\d]/g, "");
  return Number(digitLine[0] + digitLine.slice(-1));
};

const part1 = (): number => {
  const totalCalibration = processInputFile("input.txt")
    .map(getCalibration)
    .reduce((sum, calibration) => sum + calibration, 0);

  return totalCalibration;
};
