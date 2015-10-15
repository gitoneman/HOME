var alt = require('../alt');

class HomeActions {
  	constructor() {
	    this.generateActions(
	      	'getMoviesSuccess',
	      	'getMoviesFail'
	    );
  	}

  	getMovies() {
    	$.ajax({ url: '/movies' })
  		.done(data => {
        	this.actions.getMoviesSuccess(data);
      	})
      	.fail(jqXhr => {
        	this.actions.getMoviesFail(jqXhr.responseJSON.message);
      	});
  	}
}

module.exports = alt.createActions(HomeActions);