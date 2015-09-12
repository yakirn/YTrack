'use strict';

describe('SearchStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/SearchStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
