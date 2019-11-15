var React = require('react');
var uuid = require('node-uuid');
var d3 = require('d3');
var createReactClass = require('create-react-class');

//Datapoints Draws Each Tweet on the Chart
var DataPoints = createReactClass({

  //renderPoints Returns a <circle></circle> for Each Data Point
  renderPoints: function(data, index) {
    var dataNegativeProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.negTweets),
      r: 4,
      fill: "none",
      stroke: "red",
      strokeWidth: 2,
      key: uuid.v4()
    };

    var dataPositiveProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.posTweets),
      r: 4,
      fill: "none",
      stroke: "green",
      strokeWidth: 2,
      key: uuid.v4()
    };

    var dataNeutralProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.neutTweets),
      r: 4,
      fill: "none",
      stroke: "sandybrown",
      strokeWidth: 2,
      key: uuid.v4()
    };

    var dataTotalProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.numTweets),
      r: 4,
      fill: "none",
      stroke: "blue",
      strokeWidth: 2,
      key: uuid.v4()
    };

    return (
      <g key={index}>
        <circle className="total point" {...dataTotalProps}>
        </circle>
        <circle className="neutral point" {...dataNeutralProps}>
        </circle>
        <circle className="negative point" {...dataNegativeProps}>
        </circle>
        <circle className="positive point" {...dataPositiveProps}>
        </circle>
      </g>
    );
  },

  //Use React to Append g Element (Usually D3 Handles This)
  //Run renderBars for all binnedTweet Data Values
  render: function() {
    return <g>{ this.props.binnedTweets.map(this.renderPoints) }</g>
  }
});

module.exports = DataPoints;