var alt = require('../alt');
var MoviesActions = require('../actions/MoviesActions');

class MoviesStore {
  	constructor() {
    	this.bindActions(MoviesActions);
    	this.movies = [];
  	}

  	onGetMoviesSuccess(data) {
    	this.movies = data;
  	}

  	onGetMoviesFail(errorMessage) {
    	toastr.error(errorMessage);
  	}
}

module.exports = alt.createStore(MoviesStore);