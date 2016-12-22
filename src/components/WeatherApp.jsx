var React = require('react');
var WeatherListItem = require('./WeatherListItem.jsx');
var WeatherToday = require('./WeatherToday.jsx');
var HTTP = require('../services/httpservice');

var city = prompt("Weather for what city?");

var WeatherApp = React.createClass({
  getInitialState: function() {
    return {
      location: city,
      cloudIcon: '~cloud~',
      todayTemp: 12,
      windDirection: '',
      windSpeed: 0,
      temps: 0
    };
  },
  componentWillMount: function() {
    HTTP.get(city)
      .then(function(data) {
        console.log("DATA: ", data);
        this.setState({
          location: data.city.name,
          todayTemp: Math.round(data.list[0].main.temp - 273.15),
          cloudIcon: data.list[0].weather[0].icon
        });
      }.bind(this));
  },

  render: function() {
    var panelBodyStyle = {
      paddingTop: "0"
    }
    
    return (
      <div className="container">
        <div className="panel panel-default">
            <WeatherToday
              headingColor="#79b8af"
              location={this.state.location}
              date="December 22nd"
              cloudIcon={this.state.cloudIcon}
              todayTemp={this.state.todayTemp}
              windDirection="North East"
              windSpeed="8 MPH"/>
          <div style={panelBodyStyle} className="panel-body">
            <WeatherListItem
              listColor="#EBEBEB"
              date="26 august"
              cloudIcon={this.state.cloudIcon}
              temps={this.state.temps}/>
            <WeatherListItem
              listColor="#F5F5F5"
              date="27 august"
              cloudIcon={this.state.cloudIcon}
              temps={this.state.temps}/>
            <WeatherListItem
              listColor="#EBEBEB"
              date="28 august"
              cloudIcon={this.state.cloudIcon}
              temps={this.state.temps}/>
            <WeatherListItem
              listColor="#F5F5F5"
              date="29 august"
              cloudIcon={this.state.cloudIcon}
              temps={this.state.temps}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;
