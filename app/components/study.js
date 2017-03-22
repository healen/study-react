import React,{Component} from 'react';

import Header from './modules/header';

import Example from './modules/example';

import Tips from './modules/tips';

import {Link} from 'react-router';

// var code = require('./code').code;


import code from './code';




// console.log(React.toString())
class Hello extends Component {
	constructor(props) {
	  super(props);
	}
	render(){
		console.log(JsxSyntx)
		return (
			<div>
				<Example title="React Hello World 实例" codeQure={code.hello}>
					<HelloWrold />
				</Example>
				<Example title="React Hello World 升级版双向数据绑定 实例" codeQure={code.TowWayData}>
					<TowWayData />
				</Example>
			</div>
		)
	}
}

class JsxSyntx extends Component {
	render(){
		return (
			<div>
				<Example title="React JSX语法" codeQure={code.jsxSynax}>
					<Arrjsx array={['abc','efg','kim']} />
				</Example>
				<Example title="React JSX语法" codeQure={code.jsxSynax2}>
					<Arrjsx2 />
				</Example>
			</div>
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
/*双向数据绑定*/
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
/*JSX 操作*/
class Arrjsx extends Component {
	render(){
		return (
			<ul>
				{
					this.props.array.map(function(name,key){
						return (
							<li key={key}>hello , {name}</li>
						)
					})
				}
			</ul>
		)

	}
}

class Arrjsx2 extends Component {
	render(){
		/*<div dangerouslySetInnerHTML={{__html:this.props.array}}></div>*/
		var arr = [<h2>Hello World</h2>,<h5>this is a Array oop</h5>];
		return (
			<div>{arr}</div>
		)
	}
}
export {Hello,JsxSyntx};