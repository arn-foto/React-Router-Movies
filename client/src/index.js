import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; //Import Router first
import './index.css';

import App from './App';
//then wrap the APP in Router
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
