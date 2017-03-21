import React,{Component} from 'react'

export default class Example extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	showCode:"show Code",
	  	isCodeOpen:false
	  };

	}

	render(){
		// var open = false;
		return (
			<div>
				<h3 className="page-header">{this.props.title}</h3>

				<div className="playground">
					<div className="bs-example">
						{this.props.children}
					</div>


					<div ref="code" className={this.state.isCodeOpen ? 'show':'hide'}  style={{clear:"both"}} >
					{this.props.codeQure}
					</div>
					<span className={this.state.isCodeOpen ? 'code-toggle hui':'code-toggle'} onClick={this.handleOpen.bind(this)} ref="btn" role="button" href="javascript:void(0)">{this.state.showCode}</span>
				</div>
			</div>
		)
	}
	handleOpen(){
		if(this.state.isCodeOpen==false){
			this.setState({isCodeOpen:true,showCode:"hide Code"});
		}else{
			this.setState({isCodeOpen:false,showCode:"show Code"});
		}
	}
}
