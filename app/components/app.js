import React,{Component} from 'react';

import Header from './modules/header';

import {Link} from 'react-router'

import Menu from './services/menu'
import '../less/bundle.css';
import '../less/index.less';


class App extends Component {
	render(){
		return (
			<div className="bodyPage">
				<Header />
				<div className="container bs-docs-container bodyPage">
					{this.props.children}
				</div>
			</div>
		)	
	}
}

class Index extends Component {
	render(){
		return (
			<div className="indexWarrp" style={{marginTop:"10px"}}>

				<p>我的react 入坑之旅</p>

				<Link to="StudyReact" className="btn btn-lg btn-primary btn-shadow">快速入坑</Link>

			</div>
		)	
	}
}






class StudyReact extends Component {

	componentDidMount() {
	  window.onscroll = function(){
	  	var headerDOM = document.getElementById('header');
	  	var navBarDOM = document.getElementById('navBar');
	  	var scrollTOP = document.body.scrollTop;
	  	var headerHeight = headerDOM.offsetHeight;
	  	var offsetLeft = navBarDOM.offsetLeft;
	  	var navWidth = navBarDOM.offsetWidth;
	  	if(scrollTOP>headerHeight){
	  		navBarDOM.style.position="fixed";
	  		navBarDOM.style.top="0px";
	  		navBarDOM.style.left=offsetLeft+"px";
	  		navBarDOM.style.width=navWidth+"px"
	  	}else{
	  		navBarDOM.style={}
	  	}
	  }
	}
	render(){
		return (
			<div className="bodyPage">
				<div className="col-md-9 col-sm-9 col-xs-9">{this.props.children}</div>
				<div className="col-md-3 col-sm-3 col-xs-3 navBar bodyPage" id="navBar">
					<ul>
						{
							Menu.map(function(item,key){
								return (
									<li key={key}>
										<Link to={item.to} activeClassName="acitve">{item.title}</Link>
									</li>
								)
								
							})
						}
					</ul>
				</div>
				

			</div>
		)	
	}
}

export {App,Index,StudyReact};