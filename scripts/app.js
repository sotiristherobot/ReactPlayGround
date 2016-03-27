var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({

  messageShow : function(){

    alert("Hello World");
    
  },
  render : function(){
    return (
      <div>
        <LeftColumn messageShow = {this.messageShow} />
	<RightColumn />

      </div>
    )
  }
});

var LeftColumn = React.createClass({

  render : function(){

    return (

      <div className="leftcol" onClick={this.props.messageShow}> eftColumn</div>

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
