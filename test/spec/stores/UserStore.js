'use strict';

// import UserStore from 'stores/UserStore.js';
//var    store = require('stores/UserStore.js');

describe('UserStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/UserStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
