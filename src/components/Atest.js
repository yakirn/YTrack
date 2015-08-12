'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/Atest.scss');

var Atest = React.createClass({

  render: function () {
  	console.log('Atest');
    return (
        <div className="Atest">
          <p>Content for Atest</p>
        </div>
      );
  }
});

module.exports = Atest;
