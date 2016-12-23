var React = require('react');

var WeatherToday = React.createClass({

  render: function() {

    var headingstyles = {
      color: "white",
      background: (this.props.headingColor)
    }

    var cloudSize = {
      fontSize: "40px"
    }

    // var cloudIconPic = ("wi wi-owm-" + (this.props.cloudIcon));
    var cloudIconPic = ("wi wi-day-cloudy");
    // var todayinUnix = (this.props.date);
    // var todaydate = new Date(todayinUnix);
    var todaysTempC = (this.props.todayTemp);
    var todayTempF = ((todaysTempC) * 9/5 + 32);

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
            <i style={cloudSize} className={cloudIconPic}></i>
          </div>
          <div className="col-sm-6">
            <h3>{todaysTempC}&deg; / {todayTempF}&deg;</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h4>{this.props.windDirection}</h4>
          </div>
          <div className="col-sm-6">
            <span>
              <h4><i className="wi wi-strong-wind"></i> {this.props.windSpeed}</h4>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherToday;
