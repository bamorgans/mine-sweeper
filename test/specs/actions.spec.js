import assert from 'assert';
import actions from '../../src/actions.js';

describe('Actions Test',() => {
    describe('CHANGE_LEVEL', () => {
        it('should create CHANGE_LEVEL action', (done) => {
            let action = actions.changeLevel(3);
            assert.deepEqual(action,
                {
                    type: 'CHANGE_LEVEL',
                    payload: 3
                });

            done();
        });
    });

});
