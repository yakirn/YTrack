'use strict';

import React from 'react';

//var Actions = require('actions/xxx')
import Login from './Login';

require('styles/Header.scss');

var Header = React.createClass({

  render: function () {
    return (
        <div className="Header">
        	<span className="headerText">YTrack</span>
          <Login/>
        </div>
      );
  }
});

module.exports = Header;
