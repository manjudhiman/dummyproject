$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Authors = require('./components/authors/authorPage');

(function(window) {
  "use strict";
    var App = React.createClass({
      render: function() {
        var Child;

          switch(this.props.route) {
            case 'about': Child = About; break;
            case 'authors': Child = Authors; break;
            default: Child = Home;
          }
        return (
           <div>
             <Header/>
             <Child/>
           </div>
        );
      }


    });

    function render() {
      var route = window.location.hash.substr(1);
      console.log(route);
      console.log(window.location.hash.substr(0));
      React.render(<App route={route} />, document.getElementById('app'));
    }
    window.addEventListener('hashchange', render);
    render();
})(window);
