import React from 'react';
import { render } from 'react-dom';

import router from './config/router';

const Home = React.createClass({
	render(){
		return (
			<h1> ELLO WARLD </h1>
		)
	}

})

render(
	<Home/>, 
	document.getElementById('app')
);