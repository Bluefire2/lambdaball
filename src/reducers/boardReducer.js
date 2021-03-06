import {fulfilled, processMove, TILE} from "../util";
import {Action} from "../actions";

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
        case fulfilled(Action.LOAD_FILE_ACTION): {
            // load new map
            const {map, width, height, teams, max_gold: maxGold, max_bots: maxBots, moves} = action.payload,
                squaredMap = squarify(map, height, width),
                bases = getBases(squaredMap),
                teamsWithScores = {};
            teams.forEach(team => teamsWithScores[team] = 0);
            return {
                map: squaredMap,
                maxGold,
                maxBots,
                width,
                height,
                teams: teamsWithScores,
                teamNames: teams,
                bases,
                robots: [], // no robots at the start
                moves,
                nextMove: 0
            };
        }
        case Action.MOVE_ACTION:
            // make a move!
            const {forward, move} = action.payload;
            return processMove(state, move, forward);
        case Action.SEQUENTIAL_MOVE_ACTION:
            const {next: nextOrPrevious} = action.payload,
                {moves, nextMove} = state;
            const moveToExecute = nextOrPrevious ? moves[nextMove] : moves[nextMove - 1],
                newState = {
                    ...state,
                    moves: state.moves,
                    nextMove: nextOrPrevious ? nextMove + 1 : nextMove -1 // mfw
                };
            return processMove(newState, moveToExecute, nextOrPrevious);
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
                bases[elem.team] = [j,i];
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