const assert = require('assert');
const IsogramFinder = require('../isogram_finder.js');

describe('IsogramFinder', function () {
  xit('should be able to detect an isogram', function () {
    const isogramFinder = new IsogramFinder('subdermatoglyphic');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  xit('should be able to detect a non-isogram', function () {
    const isogramFinder = new IsogramFinder('repeated');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });

  xit('should be able to detect an isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('Uncopyrightable');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  xit('should be able to detect a non-isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('NotAnIsogram');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });
});
