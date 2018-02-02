import assert from 'assert';
import actions from '../../src/actions.js';

describe('Actions Test',() => {
    describe('Set Level', () => {
        it('should create SET_LEVEL action', (done) => {
            let action = actions.setLevel(3);
            assert.deepEqual(action,
                {
                    type: 'set level',
                    payload: 3
                });

            done();
        });
    });

});
