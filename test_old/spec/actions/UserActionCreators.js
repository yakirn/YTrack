'use strict';

describe('UserActionCreators', () => {
  let action;

  beforeEach(() => {
    action = require('actions/UserActionCreators.js');
  });

  it('should be defined', () => {
    expect(action).toBeDefined();
  });
});
