var assert = require("assert");
var second_func = require('../lib/second_func');

describe('Second Function', function() {
    it('should return ok when input is valid (1-10)', function () {
        assert.equal(second_func.isValid('1'), 'OK');
        assert.equal(second_func.isValid('9'), 'OK');
        assert.equal(second_func.isValid('10'), 'OK');
        assert.equal(second_func.isValid('0'), 'Input 0 not valid');
        assert.equal(second_func.isValid('11'), 'Input 11 not valid');
        assert.equal(second_func.isValid('-5'), 'Input -5 not valid');
    });
});

describe('Ask Test', function() {
    describe('second', function() {
        it('should return ok when input is valid (1-10)', function () {
            assert.equal(second_func.isValid('askeing'), 'Input askeing not valid');
        });

        it('test add', function () {
            assert.equal(second_func.add(1,2), 3);
            assert.equal(second_func.add(99,1), 100);
            assert.equal(second_func.add(0,1), 1);
        });
    });
});
