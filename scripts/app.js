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

    return (

      <div className="leftcol"> eftColumn</div>

    );
     
  }
  
});

var RightColumn = React.createClass({


  render : function(){

    return (

      <div className="rightcol"> RightColumn </div>

    )
    
  }
  
  
});


ReactDom.render(<App/>, document.querySelector('#main'));
