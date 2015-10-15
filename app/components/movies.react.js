var React = require('react');
var MoviesStore = require('../stores/MoviesStore');
var MoviesActions = require('../actions/MoviesActions');


var movies = React.createClass({
	getInitialState: function() {
		return MoviesStore.getState();
	},
	componentDidMount: function() {
		MoviesStore.listen(this.onChange);
    	MoviesActions.getMovies();
	},
	componentWillUnmount: function() {
		MoviesStore.unlisten(this.onChange);
	},
	onChange:function(state){
		this.setState(state);
	},
	render: function() {
		var movies = this.state.movies.map(function(item){
			return (
				<div className="movies-item">
					<a href={item.href} target="_blank"><img src={item.img} /></a>
					<span className="movies-item-title">{item.title}</span>
				</div>
			)
		});
		return (
			<div className="movies-content">
				{movies}
			</div>
		);
	}
});

module.exports = movies;