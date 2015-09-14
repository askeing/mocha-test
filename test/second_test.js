var assert = require("assert");
var should = require('chai').should()
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

        it('test chai', function () {
            var x = 3;
            var foo = 'bar';
            [1,2,3].indexOf(5).should.equal(-1);
            foo.should.be.a('string');
            foo.should.have.length(3);
            foo.should.equal('bar');
            x.should.be.a('number');
            x.should.equal(3)
        });
    });
});
