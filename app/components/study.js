import React,{Component} from 'react';

import Header from './modules/header';

import Example from './modules/example';

import Tips from './modules/tips';

import {Link} from 'react-router';


class Hello extends Component {
	render(){
		return (
			<div>
				{
					// <Example title="React Hello World 实例" codeQure={(
					// 	<img src={require("./images/b1.png")} width="100%"/>
					// )}>
				}
				<Example title="React Hello World 实例" codeQure={(<img src={require("./images/b1.png")} width="100%"/>)}>
					<HelloWrold />
				</Example>

				<Example title="React Hello World 升级版双向数据绑定 实例" codeQure={(<img src={require("./images/b2.png")} width="100%"/>)}>
					<TowWayData />

				</Example>

			</div>
			
		)
	}
}

class JsxSyntx extends Component {
	render(){
		var Arr = ['held','bood','sopd']
		return (
			<Example title="React JSX语法" codeQure={(<img src={require("./images/b3.png")} width="100%"/>)}>
				<ul>
					{
						Arr.map(function(name,key){
							return (
								<li key={key}>hello , {name}</li>
							)
						})
					}
				</ul>
			</Example>
		)
	}
}







/*测试组件类*/
class HelloWrold extends Component {
	render(){
		return (
			<div>hello world</div>
		)
		
	}
}


class TowWayData extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	name:""
	  };
	}
	render(){
		return (
			<div>
				<h4>Hello ,{this.state.name}</h4>
				<input type="text" placeholder="请输入内容"  onChange={this.handleChangeName.bind(this)}/>
			</div>
		)
	}
	handleChangeName(e){
		this.setState({name:e.target.value})
	}
}














export {Hello,JsxSyntx};