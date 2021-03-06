import React,{Component} from 'react';
import {
	Router,
	Route,
	hashHistory,
	IndexRoute,
} from 'react-router';
import {App,Index,StudyReact,Effects} from './components/app.js';
import {
	Hello,
	JsxSyntx,
	Comp,
	PropsChildren,
	ProptypesEx,
	Domc,
	Statec,
	Formc,
	Lifec,
	Ajaxc
} from './components/study'
var  Routers = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path='StudyReact' component={StudyReact}>
				<IndexRoute component={Hello}/>
				<Route path="hello" component={Hello}></Route>
				<Route path="jsx" component={JsxSyntx}></Route>
				<Route path="comp" component={Comp}></Route>
				<Route path="propschildren" component={PropsChildren}></Route>
				<Route path="propstype" component={ProptypesEx}></Route>
				<Route path="domc" component={Domc}></Route>
				<Route path="statec" component={Statec}></Route>
				<Route path="formc" component={Formc}></Route>
				<Route path="life" component={Lifec}></Route>
				<Route path="ajax" component={Ajaxc}></Route>

			</Route>
			// <Route path="effects" component={Effects}></Route>
		</Route>
	</Router>
)
export default Routers;