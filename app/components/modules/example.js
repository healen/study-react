import React,{Component} from 'react';

import CodeMirror from 'react-codemirror';

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";

import "codemirror/mode/xml/xml";
import "codemirror/mode/markdown/markdown";





// console.log(require("."))

export default class Example extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	showCode:"显示源码",
	  	isCodeOpen:false
	  };

	}

	render(){
		// var open = false;
		return (
			<div>
				<h4 className="page-header">{this.props.title}</h4>
				<div className="playground">
					<div className="bs-example">
						{this.props.children}
					</div>
					<div ref="code" className={this.state.isCodeOpen ? 'codebox h':'codebox h0'}  style={{clear:"both"}} >
						<CodeMirror value={this.props.codeQure} options={{mode: 'javascript',lineNumbers:true,readOnly:'nocursor'}} />
					</div>
					<span className={this.state.isCodeOpen ? 'code-toggle hui':'code-toggle'} onClick={this.handleOpen.bind(this)} ref="btn" role="button" href="javascript:void(0)">{this.state.showCode}</span>
				</div>
			</div>
		)
	}
	handleOpen(){
		if(this.state.isCodeOpen==false){
			this.setState({isCodeOpen:true,showCode:"隐藏源码"});
		}else{
			this.setState({isCodeOpen:false,showCode:"显示源码"});
		}
	}
}
