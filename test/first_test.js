var assert = require("assert");
var first_module = require('../lib/first_module');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
});

describe('First Module', function() {
  it('should return hello to different user', function () {
    //first_module('slyu').should.equal('Hellow slyu!');
    assert.equal(first_module('slyu'), 'Hello slyu!');
  });
});

describe('Ask Test', function() {
  describe('first', function() {
    it('should return hello to different user', function () {
      assert.equal(first_module('askeing'), 'Hello askeing!');
    });
  });
});