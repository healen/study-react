import React,{Component} from 'react';
import Example from './modules/example';
import {Link} from 'react-router';
import code from './code';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Hello extends Component {
	constructor(props) {
	  super(props);
	}
	render(){
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


class ProptypesEx extends Component {
	render(){
		var str = 10
		return (
			<div id="ProptypesEx">
				<h2  className="page-header">propsType</h2>
				<p>组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。</p>
				<Example title="propsType 实例" codeQure={code.DomcExample}>
					<ProptypesShow /*str={str}*//>
				</Example>
			</div>
		)
	}
}


class Domc extends Component {
	render() {
		return (
			<div id="Domc">
				<h2  className="page-header">获取真实DOM</h2>
				<p></p>
				<Example title="获取真实DOM 实例" codeQure={code.DomcExample}>
					<DomcExample />
				</Example>
			</div>
		)
	}
}

class Statec extends Component {

	render() {
		return (
			<div id="Statec">
				<h2  className="page-header">State</h2>
				<p></p>
				<Example title="Statec 实例" codeQure={code.StateExample}>
					<StateExample />
				</Example>
			</div>
		)
	}

}


class Formc extends Component {
	render() {
		return (
			<div id="Formc">
				<h2  className="page-header">Form</h2>
				<p></p>
				<Example title="Form 实例" codeQure={code.FormExample}>
					<FormExample />
				</Example>
			</div>
		)
	}
}



class Lifec extends Component {
	render(){
		return (
			<div id="Lifec">
				<h2  className="page-header">组件的生命周期</h2>
				<p>react组件生命周期分三个状态</p>
				<ul>
					<li>Mounting:已插入真实DOM</li>
					<li>Updating:正在被重新渲染</li>
					<li>Unmounting:已移除真实DOM</li>
				</ul>
				<p>React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。</p>
				<ul>
					<li>componentWillMount()</li>
					<li>componentDidMount()</li>
					<li>componentWillUpdate(object nextProps,object nextState)</li>
					<li>componentDidUpdate(object nextProps,object nextState)</li>
					<li>componentWillUnmount()</li>
				</ul>
				<p>此外，React 还提供两种特殊状态的处理函数。</p>

				<ul>
					<li>componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用</li>
					<li>shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用</li>
					
				</ul>


				<Example title="React生命周期实例" codeQure={code.LifecExample}>
					<LifecExample />
				</Example>

			</div>
		)
	}
}



class Ajaxc extends Component {
	render(){
		return (
			<div id="Ajaxc">
				<h2 className="page-header">React Ajax</h2>
				<p>本板块介绍两种ajax方式，一种是jquery ajax 另一种是 react fetch组件实现ajax</p>



				<Example title="jquery AJAX 整合react实例" codeQure={code.GetList}>
					<GetList sources="https://api.github.com/users/octocat/gists" />
				</Example>


				<Example title="整合react fetch数据交互实例" codeQure={code.FetchGetList}>
					<FetchGetList sources="https://offline-news-api.herokuapp.com/stories" />
				</Example>

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


class ProptypesShow extends Component {

	render(){
		return (
			<div id="ProptypesShow">
				<span>{this.props.str}</span>
			</div>
		)
	}

}

ProptypesShow.propTypes = {
	str:React.PropTypes.string
}

ProptypesShow.defaultProps = {
  str: "djfadsjkf"
}


class DomcExample extends Component {
	render(){
		return (

			<div id="DomcExample">
				<input type="text" ref="myInput"/>
				<input type="button" value="点击操作" onClick={this.handleClick.bind(this)} />
			</div>
		)
	}

	handleClick(){
		this.refs.myInput.focus()
	}
}


class StateExample extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {like:false};
	}
	render(){
		var text = this.state.like? "I like" : "I don't like"
		return (
			<div id="StateExample">
				<p onClick={this.handleClick.bind(this)}>{text}</p>
			</div>
		)
	}

	handleClick(){
		this.setState({like:!this.state.like});
	}
}


class FormExample extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {fValue:''};
	}

	render(){
		let text = this.state.fValue;

		return (

			<div id="FormExample">
				<input type="text" value={this.state.fValue} onChange={this.handleChange.bind(this)}/>
				<p>{text}</p>
			</div>

		)
		
	}

	handleChange(e){
		this.setState({fValue:e.target.value})

	}
}

class LifecExample extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {width:0,text:"生命周期实例"};
	}

	componentWillMount(){
		var that = this;

		this.timer=setInterval(function(){
			var width = that.state.width;
			width+=1;

			if(width>=600){
				width=0;
			}
			that.setState({width:width})
		}, 12)

	}
	componentWillUnmount(){
		clearInterval(this.timer);
		this.timer=null;
	}
	render(){
		return (
			<div id="LifecExample">
				<div className="life" style={{width:this.state.width+"px"}}>
					{this.state.text}
				</div>
			</div>
		)
	}

}



class GetList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[]
	  };
	}


	componentDidMount(){
		var that = this;
		var url = this.props.sources;
		$.ajax({
			url:url,
			type:"GET",
			success:function(result){
				that.setState({
					list:result
				})


			},
			error:function(xhr,status,error){
				console.log(status,error)
			}
		})
		// console.log(this.props.sources)
	}

	render(){

		var listStr = '';
		var stateList = this.state.list;

		console.log(listStr)
		return (
			<ul id="GetList">
				{
					stateList.length==0? (<li>加载中...</li>) : stateList.map(function(c,k){
						return (

							<li key={k}>
								用户名: {c.owner.login} 访问请<a href={c.html_url} target="_blank">点击这里</a>
							</li>
						)
					})
				}
			</ul>

		)
		
	}
}




class FetchGetList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:"",
	  	btnState:"获取数据",
	  	btndisable:false
	  };
	}

	render(){
		var me = this

		var listStr = me.state.list==""?(<div></div>):(
				<div>
					<ul className="listWamp">
					{
						me.state.list.map(function(item,i){
							return (
								<li key={i}>
									<h2>{item.title}</h2>
			
									<div className="body" dangerouslySetInnerHTML={{__html: item.body}}/>
										
								</li>
							)
						})	
					}
					</ul>
				</div>
			)
		return (
			<div id="FetchGetList">
				<input type="button" value={this.state.btnState} disabled={this.state.btndisable} onClick={this.handleGetDate.bind(this)}/>
				<div className="dataList">

				{listStr}

				</div>
			</div>

		)
	}

	handleGetDate(){
		var me = this;
		this.setState({btndisable:true,btnState:"加载中...请稍后"})
		fetch(this.props.sources).then(function(result){
			if(result.status>=400){
				throw new Error("请求错误")
			}
			return result.json();
		}).then(function(data){
			me.setState({list:data,btndisable:false,btnState:"加载完成...重新获取"})

		})
	}
}









export {
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
};