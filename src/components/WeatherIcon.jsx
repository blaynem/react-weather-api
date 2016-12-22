var React = require('react');

var WeatherIcon = React.createClass({
    render: function() {
        return (
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        );
    }
});

module.exports = WeatherIcon;
