import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movies from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
	const [ savedList, setSavedList ] = useState([]);
	const [ movieList, setMovieList ] = useState([]);

	useEffect(() => {
		const getMovies = () => {
			axios
				.get('http://localhost:5000/api/movies')
				.then((response) => {
					setMovieList(response.data);
				})
				.catch((error) => {
					console.error('Server Error', error);
				});
		};
		getMovies();
	}, []);

	const addToSavedList = (movie) => {
		setSavedList([ ...savedList, movie ]);
	};

	return (
		<Router>
			<div>
				<SavedList list={savedList} />
				<Route path="/" exact component={() => <MovieList movies={movieList} />} />
				<Route path="/movies/:id" component={Movies} />
			</div>
		</Router>
	);
};

export default App;
