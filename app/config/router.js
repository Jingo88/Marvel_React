import React from 'react';

import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import HeroSearchContainer from '../containers/HeroSearchContainer';

const router = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path='/hero/:name' component={HeroSearchContainer}/>
		</Route>
	</Router>
)


module.exports = router;