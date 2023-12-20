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

const BAG_MAX = {
    red: 12,
    green: 13,
    blue: 14,
};

const parseCube = (cube: string): Cube => {
    const [countString, colour] = cube.trim().split(" ");
    const cubeCount = Number(countString);
    return { colour, cubeCount };
};

const isGamePossible = (sets: string[]) => {
    for (const set of sets) {
        const cubes = set.split(", ");
        for (const cube of cubes) {
            const { colour, cubeCount } = parseCube(cube);
            if (
                (colour === COLOURS.red && cubeCount > BAG_MAX.red) ||
                (colour === COLOURS.green && cubeCount > BAG_MAX.green) ||
                (colour === COLOURS.blue && cubeCount > BAG_MAX.blue)
            ) {
                return false;
            }
        }
    }
    return true;
};

const part1 = (): number => {
    let res = 0;
    const games = processInputFile("day2/input.txt");
    for (const game of games) {
        const [gameIDString, setsString] = game.split(":");
        const gameID = Number(gameIDString.slice(5));

        const sets = setsString.split("; ");
        if (isGamePossible(sets)) {
            res += gameID;
        }
    }

    return res;
};

console.log("result: ", part1());
