var React = require('react');

var WeatherListItem = React.createClass({
    render: function() {

      var listStyle = {
        color: "BCBCBC",
        background: (this.props.listColor)
      }
      var cloudIconURL = (this.props.cloudIcon);
      var cloudIconPic = ("http://openweathermap.org/img/w/" + cloudIconURL +".png");
        return (
            <div style={listStyle} className="row">
              <div className="col-sm-4">
                <h4>{this.props.date}</h4>
              </div>
              <div className="col-sm-4">
                <h4><img src={cloudIconPic} /></h4>
              </div>
              <div className="col-sm-4">
                <h4>{this.props.temps} &deg;</h4>
              </div>
            </div>
        );
    }
});

module.exports = WeatherListItem;
