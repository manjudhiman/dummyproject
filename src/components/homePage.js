"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
      console.log("**i am here");
      return (
        <div className="jumbotron">
           <h1>Manju Dhiman</h1>
          <p> Something awesome is coming soon!!!</p>
        </div>
      );
    }
});

module.exports = Home;
