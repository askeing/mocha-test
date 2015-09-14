var assert = require("assert");
var first_module = require('../lib/first_module');

// first test
var foo = 'bar';
describe('First', function () {
  it('Test', function () {
    assert.equal(foo, 'bar');
  });
});

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
    assert.equal(first_module('askeing'), 'Hello askeing!');
    assert.equal(first_module('slyu'), 'Hello slyu!');
  });
});
