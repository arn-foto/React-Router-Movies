import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const SavedList = (props) => (
	<div className="saved-list">
		<h3>Saved Movies:</h3>
		{props.list.map((movie) => <span className="saved-movie">{movie.title}</span>)}
		<div className="home-button">Home</div>
		<Route path="/App" component={App} />
	</div>
);

export default SavedList;
