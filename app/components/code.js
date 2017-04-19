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


,



DomcExample:`class DomcExample extends Component {
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
}/*渲染该组件*/
ReactDOM.render(
	<DomcExample></DomcExample>,
	document.getElementById('app')
)`



,




StateExample:`class StateExample extends Component {
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
/*渲染该组件*/
ReactDOM.render(
	<StateExample></StateExample>,
	document.getElementById('app')
)`




,



FormExample:`class FormExample extends Component {
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
/*渲染该组件*/
ReactDOM.render(
	<FormExample></FormExample>,
	document.getElementById('app')
)`




,



LifecExample:`class LifecExample extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {width:0,text:"生命周期实例"};
	}

	componentDidMount(){
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
	render(){
		return (
			<div id="LifecExample">
				<div className="life" style={{width:this.state.width+"px"}}>
					{this.state.text}
				</div>
			</div>
		)
	}

}/*渲染该组件*/
ReactDOM.render(
	<LifecExample></LifecExample>,
	document.getElementById('app')
)`




,



GetList:`class GetList extends Component {
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
}/*渲染该组件*/
ReactDOM.render(
	<GetList sources="https://api.github.com/users/octocat/gists" />,
	document.getElementById('app')
)`








,

FetchGetList:`class FetchGetList extends Component {
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
ReactDOM.render(
	<FetchGetList sources="https://offline-news-api.herokuapp.com/stories" />,
	document.getElementById('app')
)
`












}
export default code;