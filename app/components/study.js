import React,{Component} from 'react';

import Header from './modules/header';

import Example from './modules/example';

import Tips from './modules/tips';

import {Link} from 'react-router';

import code from './code';
class Hello extends Component {
	constructor(props) {
	  super(props);
	}
	render(){
		// console.log(JsxSyntx)
		return (
			<div>
				<h2  className="page-header">Hello World</h2>
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
				<h2  className="page-header">jsx语法</h2>
				<Example title="React JSX语法遍历数组" codeQure={code.jsxSynax}>
					<Arrjsx array={['abc','efg','kim']} />
				</Example>
				<Example title="React JSX语法将数组直接放置到视图" codeQure={code.jsxSynax2}>
					<Arrjsx2 />
				</Example>
			</div>
		)
	}
}


class Comp extends Component {
	render(){
		var comp = "<HelloMessage name='Healen' />"
		return(
			<div id="Comp">
				<h2  className="page-header">组件</h2>
				<p>React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件</p>
				<Example title="React 组件案例1" codeQure={code.comp}>
					<HelloMessage name="Healen"/>
				</Example>

				<p>上面代码中，变量 HelloMessage 就是一个组件类。模板插入 {comp} 时，会自动生成 HelloMessage 的一个实例（下文的"组件"都指组件类的实例）。所有组件类都必须有自己的 render 方法，用于输出组件</p>
				<p>注意，组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。</p>
			</div>
		)
	}
}

class PropsChildren extends Component {

	render(){
		return(
			<div id="PropsChildren">
				<h2  className="page-header">Props Child</h2>
				<p>this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。</p>
				<Example title="React.props.children 实例代码" codeQure={code.children}>
					<NotesList>
						<span>我是第一个子元素</span>
						<span>我是第二个子元素</span>
						<span>我是第三个子元素</span>
						<span>...</span>
						<span>我是第N个子元素</span>
					</NotesList>
				</Example>
				<p>上面代码的 NoteList 组件有两个 span 子节点，它们都可以通过 this.props.children 读取，运行结果如下。</p>
			</div>
		)
	}

}



/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/
/********华********丽********的********分********割********线********/





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
		var arr = [<h2 key="1">Hello World</h2>,<h5 key="2">this is a Array oop</h5>];
		return (
			<div>{arr}</div>
		)
	}
}

/*React 组件案例初始化*/
class HelloMessage extends Component {
	render(){
		return (
			<h2>Hello {this.props.name}</h2>
		)
	}
}


/*PropsChildren*/
class NotesList extends Component {
	render(){
		return (
			<ol>
				{
					this.props.children.map(function(child,key){
						return <li key={key}>{child}</li>
					})
				}
			</ol>
		)
	}
}






export {Hello,JsxSyntx,Comp,PropsChildren};