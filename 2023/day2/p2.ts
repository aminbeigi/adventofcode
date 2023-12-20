import { processInputFile } from "../utils.js";

interface Cube {
    colour: string;
    cubeCount: number;
}

const COLOURS = {
    red: "red",
    green: "green",
    blue: "blue",
};

const parseCube = (cube: string): Cube => {
    const [countString, colour] = cube.trim().split(" ");
    const cubeCount = Number(countString);
    return { colour, cubeCount };
};

const calcualtePower = (sets: string[]): number => {
    let green_max = 0;
    let red_max = 0;
    let blue_max = 0;
    for (const set of sets) {
        const cubes = set.split(", ");
        for (const cube of cubes) {
            const { colour, cubeCount } = parseCube(cube);
            if (colour === COLOURS.green && cubeCount > green_max) {
                green_max = cubeCount;
            } else if (colour === COLOURS.red && cubeCount > red_max) {
                red_max = cubeCount;
            } else if (colour === COLOURS.blue && cubeCount > blue_max) {
                blue_max = cubeCount;
            }
        }
    }
    return green_max * red_max * blue_max;
};

const part2 = (): number => {
    let res = 0;
    const games = processInputFile("day2/input.txt");

    for (const game of games) {
        const [_, setsString] = game.split(":");
        const sets = setsString.split("; ");
        const power = calcualtePower(sets);
        res += power;
    }

    return res;
};

console.log("result: ", part2());
