var React = require('react');

var SearchButton = React.createClass ({

	// this takes the city typed into search bar, searches for it, then replaces it with 'search'
	handleSubmit: function(e) {
		e.preventDefault();

		this.props.searchNewCity(this.refs.searchInput.value);
    	this.refs.searchInput.value = '';
	},


	render: function() {

		// the search buttons style
		var searchButtonStyle = {
			paddingTop: "10px"
		}

		return (
		    <div style={searchButtonStyle}>
		        <form onSubmit={this.handleSubmit} className="search-form">
		            <div className="form-group has-feedback">
		        		<label className="sr-only">Search</label>
		        		<input type="text" className="form-control" ref="searchInput" placeholder="Search" />
		          		<span className="glyphicon glyphicon-search form-control-feedback"></span>
		        	</div>
		        </form>
	        </div>
		);
	}
});

module.exports = SearchButton;
