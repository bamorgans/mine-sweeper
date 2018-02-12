import _  from 'lodash';
import assert from 'assert';
import {minesweeper} from '../../src/api/minesweeper.js';
import {GAME_LEVEL, LEVEL_CONFIG} from '../../src/constants.js';
import {CELL_STATUS, GAME_STATUS} from "../../src/api/minesweeper";

describe('Minesweeper API Test',() => {
    describe('validate board sizes', () => {
        it('should create Beginner board 9 x 9 with 10 mines', (done) => {
            let levelCfg = LEVEL_CONFIG[GAME_LEVEL.BEGINNER];
            let gameData = minesweeper.create(levelCfg.rows, levelCfg.cols, levelCfg.mineCount);
            assert.equal(gameData.rows, 9);
            assert.equal(gameData.cols, 9);
            assert.equal(gameData.mineCount, 10);

            done();
        });
        it('should create Intermediate board 16 x 16 with 40 mines', (done) => {
            let levelCfg = LEVEL_CONFIG[GAME_LEVEL.INTERMEDIATE];
            let gameData = minesweeper.create(levelCfg.rows, levelCfg.cols, levelCfg.mineCount);
            assert.equal(gameData.rows, 16);
            assert.equal(gameData.cols, 16);
            assert.equal(gameData.mineCount, 40);

            done();
        });
        it('should create Expert boar 24 x 24 with 99 mines', (done) => {
            let levelCfg = LEVEL_CONFIG[GAME_LEVEL.EXPERT];
            let gameData = minesweeper.create(levelCfg.rows, levelCfg.cols, levelCfg.mineCount);
            assert.equal(gameData.rows, 24);
            assert.equal(gameData.cols, 24);
            assert.equal(gameData.mineCount, 99);

            done();
        });
    });
    describe('Game Tests', () => {
        it('should lose if a mine is selected', (done) => {
            let gameData = minesweeper.create(3, 3, 1);
            let mineRowCol = Object.keys(gameData.minesRowCol)[0];
            gameData = minesweeper.open(gameData, mineRowCol);
            assert(GAME_STATUS.LOST,gameData.status);

            done();
        });
        it('should win if no mines are picked', (done) => {
            let gameData = minesweeper.create(3, 3, 1);
            let mineRowCol = Object.keys(gameData.minesRowCol)[0];
            gameData = minesweeper.open(gameData, mineRowCol);
            for (let row = 0; row < 3; row++) {
                for (let col = 0 ; col < 3; col++){
                    let key = row + ',' + col;
                    if( key !== mineRowCol) {
                        gameData = minesweeper.open(gameData,key);
                    }
                }
            }

            assert(GAME_STATUS.WIN,gameData.status);

            done();
        });

        it('Should pick flag', (done) => {
            let gameData = minesweeper.create(3, 3, 1);
            let mineRowCol = Object.keys(gameData.minesRowCol)[0];
            gameData = minesweeper.flag(gameData, mineRowCol);

            assert(CELL_STATUS.FLAGGED,gameData.cellsRowCol[mineRowCol].status);

            done();
        });
    });
});
