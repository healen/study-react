import React,{Component} from 'react';

import Header from './modules/header';

import Example from './modules/example'

import {Link} from 'react-router';


class Hello extends Component {
	render(){
		return (
			<Example title="React Hello World 小实例" codeQure={(
				<CodeBox>
					暂时不能展示代码
					
				</CodeBox>
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