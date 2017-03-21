import React,{Component} from 'react';

import Header from './modules/header';

import {Link} from 'react-router'
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
	render(){
		return (
			<div className="bodyPage">
				<div className="col-md-9 col-sm-9 col-xs-9">{this.props.children}</div>
				<div className="col-md-3 col-sm-3 col-xs-3 navBar bodyPage">
					<ul>
						<li>
							<Link to="/StudyReact/hello" activeClassName="acitve">Hello Word</Link>
						</li>
						<li>
							<Link to="/StudyReact/jsx" activeClassName="acitve">jsx语法</Link>
						</li>
						<li>
							<Link to="/StudyReact/comp" activeClassName="acitve">react组件</Link>
						</li>

						<li>
							<Link to="/StudyReact/prop" activeClassName="acitve">react PropTypes</Link>
						</li>

						<li>
							<Link to="/StudyReact/dom" activeClassName="acitve">react DOM</Link>
						</li>

						<li>
							<Link to="/StudyReact/state" activeClassName="acitve">react state</Link>
						</li>

						<li>
							<Link to="/StudyReact/form" activeClassName="acitve">react 表单</Link>
						</li>

						<li>
							<Link to="/StudyReact/life" activeClassName="acitve">react 生命周期</Link>
						</li>

						<li>
							<Link to="/StudyReact/ajax" activeClassName="acitve">react Ajax</Link>
						</li>

						<li>
							<Link to="/StudyReact/webpack" activeClassName="acitve">react Webpack</Link>
						</li>
					</ul>
				</div>
				

			</div>
		)	
	}
}

export {App,Index,StudyReact};