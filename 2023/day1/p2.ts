import { processInputFile } from "../utils.js";

const DIGIT_REPLACEMENTS: { [key: string]: string } = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
};

const replaceDigits = (
  line: string,
  replacements: { [key: string]: string }
): string =>
  line
    .replace(
      /one|two|three|four|five|six|seven|eight|nine/g,
      (match) => replacements[match] || ""
    )
    .replace(/[^\d]/g, "");

const getCalibration = (line: string): number => {
  const digitLine = replaceDigits(line, DIGIT_REPLACEMENTS);
  return Number(digitLine[0] + digitLine.slice(-1));
};

const part2 = (): number => {
  const totalCalibration = processInputFile("input.txt")
    .map(getCalibration)
    .reduce((sum, calibration) => sum + calibration, 0);

  return totalCalibration;
};
