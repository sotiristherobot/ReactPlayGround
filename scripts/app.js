var React = require('react');
var ReactDom = require('react-dom');


var App = React.createClass({

  render : function(){

    return (
      <div>

	<LeftColumn />
	<RightColumn />

      </div>
    )

  }

});

var LeftColumn = React.createClass({

  render : function(){


    return (<p> Left Side </p>);
     
  }
  
});

var RightColumn = React.createClass({


  render : function(){


    return (<p> Right Side </p>)
    
  }
  
  
});


ReactDom.render(<App/>, document.querySelector('#main'));
