var code = {
	hello:`/*组件定义*/
class HelloWrold extends Component {//定义 HelloWorld组件对象
	render(){//渲染
		return (
			<div>hello world</div> 
		)
	}
}
/*渲染该组件*/
ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
)`




,






	TowWayData:`/*双向数据绑定*/
class TowWayData extends Component {
	constructor(props) {//对象初始化
	  super(props);
	  this.state = {
	  	name:""//定义state.name
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
	/*当表单内容发生变化时候调用此方法*/
	handleChangeName(e){
		this.setState({name:e.target.value})//react 使用this.setState()来改变状态做到双向数据绑定
	}
}
/*渲染该组件*/
ReactDOM.render(
	<TowWayData />,
	document.getElementById('app')
)`



,


jsxSynax:`/*JSX 操作*/
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
/*渲染该组件*/
ReactDOM.render(
	<Arrjsx array={['abc','efg','kim']} />,
	document.getElementById('app')
)`




,




jsxSynax2:`/*通过jsx直接访问数组元素*/
class Arrjsx2 extends Component {
	render(){
		var arr = [<h2>Hello World</h2>,<h5>this is a Array oop</h5>];
		return (
			<div>{arr}</div>
		)
	}
}

/*渲染该组件*/
ReactDOM.render(
	<Arrjsx2 />,
	document.getElementById('app')
)`




,




comp:`class HelloMessage extends Component {
	render(){
		return (
			<h1>Hello {this.props.name}</h1>
		)
	}
}
/*渲染该组件*/
ReactDOM.render(
	<HelloMessage name="Healen" />,
	document.getElementById('app')
)`





,



children:`class NotesList extends Component {
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
/*渲染该组件*/
ReactDOM.render(
	<NotesList>
		<span>我是第一个子元素</span>
		<span>我是第二个子元素</span>
		<span>我是第三个子元素</span>
		<span>...</span>
		<span>我是第N个子元素</span>
	</NotesList>,
	document.getElementById('app')
)`





,


ProptypesShow:`class ProptypesShow extends Component {

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
}/*渲染该组件*/
ReactDOM.render(
	<ProptypesShow></ProptypesShow>,
	document.getElementById('app')
)`















}
export default code;