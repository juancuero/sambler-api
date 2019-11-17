const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function() {
  describe('when receives na entity and an action', function() {
    it('should return the respective message', function() {
      const result = buildMessage('publication', 'create');
      const expect = 'publication created';
      assert.strictEqual(result, expect);
    });
  });

  describe('when receives an entity and an action and is a list', function() {
    it('should return the respective message with the entity in plural', function() {
      const result = buildMessage('publication', 'list');
      const expected = 'publications listed';
      assert.strictEqual(result, expected);
    });
  });
});
