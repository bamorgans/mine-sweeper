import assert from 'assert';
import {minesweeper} from '../../src/api/minesweeper.js';
import {GAME_LEVEL, LEVEL_CONFIG} from '../../src/constants.js';

describe('Minesweeper API Test',() => {
    describe('validate board sizes', () => {
        it('should create Beginner boar 9x9 with 10 mines', (done) => {
            let levelCfg = LEVEL_CONFIG[GAME_LEVEL.BEGINNER];
            let gameData = minesweeper.create(levelCfg.rows, levelCfg.cols, levelCfg.mineCount);
            assert.equal(gameData.rows, 9);
            assert.equal(gameData.cols, 9);
            assert.equal(gameData.mineCount, 10);

            done();
        });
        it('should create Intermediate board 16x16 with 40 mines', (done) => {
            let levelCfg = LEVEL_CONFIG[GAME_LEVEL.INTERMEDIATE];
            let gameData = minesweeper.create(levelCfg.rows, levelCfg.cols, levelCfg.mineCount);
            assert.equal(gameData.rows, 16);
            assert.equal(gameData.cols, 16);
            assert.equal(gameData.mineCount, 40);

            done();
        });
        it('should create Expert boar 24x24 with 99 mines', (done) => {
            let levelCfg = LEVEL_CONFIG[GAME_LEVEL.EXPERT];
            let gameData = minesweeper.create(levelCfg.rows, levelCfg.cols, levelCfg.mineCount);
            assert.equal(gameData.rows, 24);
            assert.equal(gameData.cols, 24);
            assert.equal(gameData.mineCount, 99);

            done();
        });
    });
});
