var React = require('react');

var WeatherToday = React.createClass({


  render: function() {

    var headingstyles = {
      color: "white",
      background: (this.props.headingColor)
    }

    var cloudIconURL = (this.props.cloudIcon);
    var cloudIconPic = ("http://openweathermap.org/img/w/" + cloudIconURL +".png");
    // var todayinUnix = (this.props.date);
    // var todaydate = new Date(todayinUnix);

    return (
      <div style={headingstyles} className="panel-heading">
        <div className="row">
          <div className="col-sm-10">
            <h4>{this.props.location}</h4>
            <h5>{this.props.date}</h5>
          </div>
          <div className="col-sm-2">
            <span className="glyphicon glyphicon-search"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3><img src={cloudIconPic} /></h3>
          </div>
          <div className="col-sm-6">
            <h3>{this.props.todayTemp} &deg;</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <span>
              <h4>compass icon {this.props.windDirection}</h4>
            </span>
          </div>
          <div className="col-sm-6">
            <span>
              <h4>wind icon {this.props.windSpeed}</h4>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherToday;
