import React,{Component} from 'react';

import Header from './modules/header';

import Example from './modules/example'

import {Link} from 'react-router';


class Hello extends Component {
	render(){
		return (
			<Example title="React Hello World 实例" codeQure={(
				<img src={require("./images/b1.png")} width="100%"/>
			)}>
			<HelloWrold></HelloWrold>
			</Example>
		)
	}
}

class HelloWrold extends Component {
	render(){
		return (
			<div>hello world</div>
		)
		
	}
}


class CodeBox extends Component {
	render(){
		return(
			<pre>{this.props.children}</pre>
		)
	}
}




export {Hello};