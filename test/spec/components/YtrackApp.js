'use strict';

describe('YtrackApp', () => {
  let React = require('react/addons');
  let YtrackApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    YtrackApp = require('components/YtrackApp.js');
    component = React.createElement(YtrackApp);
  });

  it('should create a new instance of YtrackApp', () => {
    expect(component).toBeDefined();
  });
});
