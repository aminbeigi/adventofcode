import { readFileSync } from "fs";

export const processInputFile = (filePath: string): string[] => {
  try {
    const fileContent: string = readFileSync(filePath, {
      encoding: "utf-8",
    }).trim();

    if (!fileContent) {
      console.warn(
        `Warning: The file at ${filePath} is empty or contains only whitespace.`
      );
      return [];
    }

    return fileContent.split("\n");
  } catch (err: any) {
    console.error(`Error reading file at ${filePath}:`, err.message);
    return [];
  }
};
