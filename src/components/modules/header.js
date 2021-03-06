import React,{Component} from 'react';
import {
	Router,
	Route,
	Link,
	hashHistory
} from 'react-router';
export default class Header extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	GitHubUrl:'https://github.com/healen/study-react',
	  	open:false,
	  	title:"React之禅",
	  	desct:"React以及相关组件开发，如下笔记"
	  };
	}
	componentDidMount() {
	  document.title = this.state.title
	}
	render(){
		return (
			<div id="header">
				<header role="banner" className="bs-docs-nav navbar navbar-default navbar-static-top">
					<div className="container">
						<div className="navbar-header">
							<Link className="navbar-brand" to="/">Study-React</Link>
							<button type="button" className="navbar-toggle collapsed" onClick={this.handleShowNav.bind(this)}>
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className={this.state.open?"navbar-collapse bs-navbar-collapse":"navbar-collapse bs-navbar-collapse collapse"}>
							<ul id="top" role="navigation" className="nav navbar-nav">
								<li> <Link to="/StudyReact" activeClassName="active">笔记</Link></li>
								{
								// <li> <Link to="/effects" activeClassName="active">炫酷特效</Link></li>
								}
								<li><a href={this.state.GitHubUrl} target="_blank">GitHub Source Code</a></li>
							</ul>
						</div>
					</div>
				</header>
				<div className="bs-docs-header" id="content" data-reactid="26" style={{"overflow":"hide"}}>
					<div className="container" data-reactid="27">
						<h1 data-reactid="28">{this.state.title}</h1>
						<p data-reactid="29">{this.state.desct}</p>
					</div>
				</div>
			</div>
		)
	}
	handleShowNav(){
		this.setState({open:!this.state.open})
	}
}