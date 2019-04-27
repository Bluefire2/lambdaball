import {fulfilled, processMove, TILE} from "../util";
import {LOAD_FILE_ACTION, MOVE_ACTION} from "../actions";

// TODO: document board object schema

const initialState = {
    // map: [],
    // maxGold: 0,
    // maxBots: 0,
    // width: 0,
    // height: 0,
    // teams: [],
    // teamNames: [],
    // bases: {},
    // robots: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case fulfilled(LOAD_FILE_ACTION):
            // load new map
            const {map, width, height, teams, max_gold: maxGold, max_bots: maxBots} = action.payload,
                squaredMap = squarify(map, height, width),
                bases = getBases(squaredMap),
                // for testing: delete after processMove is done.
                testBots = {
                    0: {team: "Red", xy: bases["Red"]},
                    1: {team: "Blue", xy: bases["Blue"]},
                },
                teamsWithScores = {};
            teams.forEach(team => teamsWithScores[team] = 0);
            console.log(bases);
            return {
                map: squaredMap,
                maxGold,
                maxBots,
                width,
                height,
                teams: teamsWithScores,
                teamNames: teams,
                bases,
                robots: testBots // no robots at the start
            };
        case MOVE_ACTION:
            // make a move!
            const {direction, move} = action.payload;
            return processMove(state, move, direction);
        default:
            return state
    }
}

/**
 * Get all the team home base locations from a map.
 *
 * @param map The map.
 * @return An object mapping team names to home base locations.
 */
const getBases = map => {
    const bases = {};
    for (let i = 0; i < map.length; i++) {
        const row = map[i];
        for (let j = 0; j < row.length; j++) {
            const elem = row[j];
            if (elem.type === TILE.BASE) {
                bases[elem.team] = [j, i];
            }
        }
    }
    return bases;
};

/**
 * Convert a 1-dimensional representation with a given width into a 2-dimensional representation. Note that the mapping
 * goes row-by-row, not column-by-column, i.e. if the width is {@code n}, then the first {@code n} cells represent the
 * first row of the 2D representation.
 *
 * @param map The array.
 * @param height The height of the 2D representation.
 * @param width The width of the 2D representation.
 * @return {Array} The 2D representation.
 */
const squarify = (map, height, width) => {
    const squareMap = [];
    let row = 0, column = 0;
    for (let i = 0; i < map.length; i++) {
        if (squareMap[row] === void 0) {
            squareMap[row] = [];
        }
        squareMap[row][column] = map[i];

        // if (column < width - 1) {
        //     column++;
        // } else {
        //     column = 0;
        //     row++;
        // }
        if (row < height - 1) {
            row++;
        } else {
            column++;
            row = 0;
        }
    }
    return squareMap;
};