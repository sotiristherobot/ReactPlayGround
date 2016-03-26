var React = require('react');
var ReactDom = require('react-dom');


var App = React.createClass({

  render : function(){

    return ( <p> Hello World </p>)

  }

  
});

ReactDom.render(<App/>, document.querySelector('#main'));
