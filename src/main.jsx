var React = require('react');
var ReactDOM = require('react-dom');
var WeatherApp = require('./components/WeatherApp.jsx');


//appSize can be changed by using bootstrap sizes ex: col-xs-4, container, etc.
ReactDOM.render(<WeatherApp appSize="col-xs-4" appColor="#ec4444" />, document.getElementById('weather'));
