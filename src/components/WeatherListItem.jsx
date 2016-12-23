var React = require('react');

var WeatherListItem = React.createClass({
    render: function() {

      var todaysTempC = (this.props.temps);
      var todayTempF = ((todaysTempC) * 9/5 + 32);

      var listStyle = {
        color: "BCBCBC",
        background: (this.props.listColor)
      }
      var cloudIconPic = ("wi wi-owm-" + (this.props.cloudIcon));
        return (
            <div style={listStyle} className="row">
              <div className="col-sm-4">
                <h4>{this.props.date}</h4>
              </div>
              <div className="col-sm-4">
                <i className={cloudIconPic}></i>
              </div>
              <div className="col-sm-4">
                <h4>{todaysTempC}&deg; / {todayTempF}&deg;</h4>
              </div>
            </div>
        );
    }
});

module.exports = WeatherListItem;
