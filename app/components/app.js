import React,{Component} from 'react';

import Header from './modules/header';

class App extends Component {
	render(){
		return (
			<div>
				<Header />
				{this.props.children}

			</div>
			

		)	
	}
}






class Index extends Component {
	render(){
		return (
			<div>this is Index is a  app</div>
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