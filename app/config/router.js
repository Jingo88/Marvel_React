import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import HomeContainer from '../containers/HomeContainer'

const router = (
	<Router history={hashHistory}>
		<Route path='/' component = {HomeContainer}/>
	</Router>
)

module.exports = router;