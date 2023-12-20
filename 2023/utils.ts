import { readFileSync } from "fs";
import { join } from "path";

export const processInputFile = (filePath: string): string[] => {
    const absoluteFilePath = join(__dirname, filePath);
    try {
        const fileContent: string = readFileSync(absoluteFilePath, {
            encoding: "utf-8",
        }).trim();

        if (!fileContent) {
            console.warn(
                `Warning: The file at ${absoluteFilePath} is empty or contains only whitespace.`
            );
            return [];
        }

        return fileContent.split("\n");
    } catch (err: any) {
        console.error(`Error reading file at ${absoluteFilePath}:`, err.message);
        return [];
    }
};
