var React = require('react');

var Axis = require('./Axis.jsx');
var d3 = require('d3');
var createReactClass = require('create-react-class');

//XYAxes Holds the Separate X and Y Axis Components
var XYAxes = createReactClass({
  
  //Create x and y props to Pass into <Axis />
  render: function() { 
    var xAxis =  {
      className: 'x axis',
      translate: 'translate(0,' + this.props.height + ')',
      scale: this.props.xScale,
      orient: 'bottom',
      ticks: 4
    };

    var yAxis = {
      className: 'y axis',
      translate: 'translate(0, 0)',
      scale: this.props.yScale,
      orient: 'left',
      ticks: 6
    };

    //Use React to Append g Element (Usually D3 Handles This)
    //Append <Axis /> for X and Y Axis
    return (
      <g className="xy-axes">
        <Axis { ...xAxis } { ...this.props }/>
        <Axis { ...yAxis } { ...this.props }/>
      </g>
    );
  }
});

module.exports = XYAxes;