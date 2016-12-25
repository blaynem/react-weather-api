var React = require('react');
var ReactDOM = require('react-dom');
var WeatherApp = require('./components/WeatherApp.jsx');


//appColor can be changed by simply replacing with a color of your choice.
ReactDOM.render(<WeatherApp appColor="#ec4444" startCity="fargo" />, document.getElementById('weather'));
