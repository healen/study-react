import React,{Component} from 'react';

import Header from './modules/header';

import {Link} from 'react-router'

import '../less/index.less';


class App extends Component {
	render(){
		return (
			<div className="bodyPage">
				<Header />
				<div className="container bs-docs-container bodyPage">
					{this.props.children}
				</div>
			</div>
		)	
	}
}

class Index extends Component {
	render(){
		return (
			<div className="indexWarrp" style={{marginTop:"10px"}}>

				<p>快速开始我的react 入坑之旅之旅</p>

				<Link to="StudyReact" className="btn btn-lg btn-primary btn-shadow">快速入坑</Link>

			</div>
		)	
	}
}






class StudyReact extends Component {
	render(){
		return (
			<div className="bodyPage">
				<div className="col-md-3 col-sm-3 col-xs-4 navBar bodyPage">
					<ul>
						<li>
							<Link to="/StudyReact/hello" activeClassName="acitve">react的 Hello Word</Link>
							
						</li>
						
					</ul>
				</div>
				<div className="col-md-9 col-sm-9 col-xs-8">{this.props.children}</div>

			</div>
		)	
	}
}

export {App,Index,StudyReact};