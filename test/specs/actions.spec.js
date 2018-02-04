import assert from 'assert';
import actions from '../../src/actions.js';
import {ACTION_TYPE, GAME_LEVEL, GAME_STATES} from "../../src/constants";

describe('Actions Test',() => {
    describe('create redux actions', () => {
        it('should create SET_LEVEL action', (done) => {
            let action = actions.setLevel(GAME_LEVEL.BEGINNER);
            assert.deepEqual(action,
                {
                    type: 'set level',
                    payload: 'beginner'
                });

            done();
        });
        it('should create updateGame action', (done) => {
            let action = actions.updateGame(GAME_STATES.END, {});
            assert.deepEqual(action,
                {
                    type: 'update game',
                    payload: {gameState: 'end', gameData:{}}
                });

            done();
        });
    });

});
