import React,{Component} from 'react';

import Header from './modules/header';

import '../less/index.less'

class App extends Component {
	render(){
		return (
			<div>
				<Header />
				<div className="container bs-docs-container">
					{this.props.children}
				</div>
				
			</div>
			

		)	
	}
}

class Index extends Component {
	render(){
		return (
			<div className="indexWarrp">

				<p>快速开始我的react 入坑之旅之旅</p>	

			</div>
		)	
	}
}

class StudyReact extends Component {
	render(){
		return (
			<div>this is StudyReact app</div>
		)	
	}
}



export {App,Index,StudyReact};