"use strict";
var React = require('react');

var About = React.createClass({
   render: function() {
     return (
         <div>
            <h1> About </h1>
            <p> This is about the technologies i know
               <ul>
                 <li> ROR </li>
                 <li> Javasscript </li>
                 <li> React </li>
               </ul>
            </p>
         </div>
     );
   }
});

module.exports = About;
