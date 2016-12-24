var React = require('react');
var ReactDOM = require('react-dom');
var WeatherApp = require('./components/WeatherApp.jsx');


//appSize can be changed by using bootstrap sizes ex: col-sm-12, etc.
//appColor can be changed by simply replacing with a color of your choice.
ReactDOM.render(<WeatherApp appSize="col-xs-4" appColor="#ec4444" startCity="fargo" />, document.getElementById('weather'));
