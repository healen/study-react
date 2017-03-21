import React,{Component} from 'react';

import Header from './modules/header';

import Example from './modules/example';

import Tips from './modules/tips';

import {Link} from 'react-router';


class Hello extends Component {
	render(){
		return (
			<div>
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
		return (
			<div>
				<Example title="React JSX语法" codeQure={(<img src={require("./images/b3.png")} width="100%"/>)}>
					<Arrjsx array={['abc','efg','kim']} />
				</Example>
				<Example title="React JSX语法" codeQure={(
						<img src={require("./images/b4.png")} width="100%"/>
					
					)}>
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