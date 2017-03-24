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

class Effects extends Component {
	// componentDidMount() {
	// 	(function(){
	// 		function C(){
	// 			e.globalCompositeOperation="source-over";
	// 			e.fillStyle="rgba(8,8,12,0.65)";
	// 			e.fillRect(0,0,f,p);
	// 			e.globalCompositeOperation="lighter";
	// 			x=q-u;
	// 			y=r-v;
	// 			u=q;
	// 			v=r;
	// 			for(var d=0.86*f,l=0.125*f,m=0.5*f,t=Math.random,n=Math.abs,o=z;o--;){
	// 				var h=A[o],i=h.x,j=h.y,a=h.a,b=h.b,c=i-q,k=j-r,g=Math.sqrt(c*c+k*k)||0.001,c=c/g,k=k/g;
	// 				if(w&&g<m)
	// 				var s=14*(1-g/m),a=a+(c*s+0.5-t()),b=b+(k*s+0.5-t());
	// 				g<d&&(s=0.0014*(1-g/d)*f,a-=c*s,b-=k*s);
	// 				g<l&&(c=2.6E-4*(1-g/l)*f,a+=x*c,b+=y*c);
	// 				a*=B;
	// 				b*=B;
	// 				c=n(a);
	// 				k=n(b);
	// 				g=0.5*(c+k);
	// 				0.1>c&&(a*=3*t());
	// 				0.1>k&&(b*=3*t());
	// 				c=0.45*g;
	// 				c=Math.max(Math.min(c,3.5),0.4);
	// 				i+=a;
	// 				j+=b;
	// 				i>f?(i=f,a*=-1):0>i&&(i=0,a*=-1);
	// 				j>p?(j=p,b*=-1):0>j&&(j=0,b*=-1);
	// 				h.a=a;
	// 				h.b=b;
	// 				h.x=i;
	// 				h.y=j;
	// 				e.fillStyle=h.color;
	// 				e.beginPath();
	// 				e.arc(i,j,c,0,D,!0);
	// 				e.closePath();
	// 				e.fill()
	// 			}
	// 		}
	// 		function E(d){
	// 			d=d?d:window.event;
	// 			q=d.clientX-m.offsetLeft-n.offsetLeft;
	// 			r=d.clientY-m.offsetTop-n.offsetTop
	// 		}
	// 		function F(){
	// 			w=!0;
	// 			return!1
	// 		}
	// 		function G(){
	// 			return w=!1
	// 		}
	// 		function H(){
	// 			this.color="rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")";
	// 			this.b=this.a=this.x=this.y=0;
	// 			this.size=1
	// 		}
	// 		var D=2*Math.PI,f=1E3,p=560,z=600,B=0.96,A=[],o,e,n,m,q,r,x,y,u,v,w;
	// 		window.onload=function(){
	// 			o=document.getElementById("mainCanvas");
	// 			if(o.getContext){
	// 				m=document.getElementById("outer");
	// 				n=document.getElementById("canvasContainer");
	// 				e=o.getContext("2d");
	// 				for(var d=z;d--;){
	// 					var l=new H;
	// 					l.x=0.5*f;
	// 					l.y=0.5*p;
	// 					l.a=34*Math.cos(d)*Math.random();
	// 					l.b=34*Math.sin(d)*Math.random();
	// 					A[d]=l}q=u=0.5*f;r=v=0.5*p;
	// 					document.onmousedown=F;
	// 					document.onmouseup=G;
	// 					document.onmousemove=E;
	// 					setInterval(C,33);
	// 					document.getElementById("output").innerHTML='用鼠标进行滑动或点击'
	// 				}
	// 			else document.getElementById("output").innerHTML="对不起，需要最新版本的Chrome, Firefox, Opera, Safari, or Internet Explorer 9."
	// 		}
	// 	})();    	

	  
	// }
	render(){
		return (
			<div id="outer">
				<div id="canvasContainer">
					<canvas id="mainCanvas" width="1000" height="560"></canvas>
					<div id="output"></div>
				</div>
			</div>
		)
	}
}

export {App,Index,StudyReact,Effects};