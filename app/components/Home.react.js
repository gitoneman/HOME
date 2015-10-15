var React = require('react');
var MoviesStore = require('../stores/MoviesStore');
var MoviesActions = require('../actions/MoviesActions');

var Home = React.createClass({
	getInitialState: function() {
		return {
			movies: []
		}
	},
	componentDidMount: function() {
		MoviesStore.listen(this.onChange);
		//初始化action
    	MoviesActions.getMovies();
	},
	componentWillUnmount: function() {
		MoviesStore.unlisten(this.onChange);
	},
	onChange:function(state){
		this.setState(state);
	},
	render: function() {
		return (
			<div>
				
			</div>
			
		);
	}
});

module.exports = Home;