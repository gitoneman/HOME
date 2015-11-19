import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as moviesAction from '../actions/moviesAction';
import { Datepicker } from 'antd';

function mapStateToProps(state) {
  	return {
    	list: state.movies.list
  	};
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators(moviesAction, dispatch)
}

class movies extends React.Component {
	constructor(props) {
	    super(props);

  	}
  	componentDidMount() {
		this.props.getMoviesSync(12)
  	}
  	componentWillUnmount() {
	    
  	}
  	render(){
  		var movies = this.props.list.map(function(item,i){
			return (
				<div key={i} className="movies-item">
					<a href={item.href} target="_blank"><img src={item.img} /></a>
					<span className="movies-item-title">{item.title}</span>
				</div>
			)
		});
		return (
			<div className="movies-content">
				{movies}
				<Datepicker />
			</div>
		);
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(movies);