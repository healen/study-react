import React,{Component} from 'react';
import {
	Router,
	Route,
	hashHistory,
	IndexRoute,
} from 'react-router';
import {App,Index,StudyReact} from './components/app.js';
var  Routers = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path='StudyReact' component={StudyReact}>
			</Route>
		</Route>
	</Router>
)
export default Routers;