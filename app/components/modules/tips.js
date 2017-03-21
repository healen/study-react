import React,{Component} from 'react'

export default class Tips extends Component {
	render(){
		return (
			<pre style={{display:"block",backgroundColor:"#1a1a1a",padding:"10px",color:"#ff0000",borderRadius:"0"}}>
				<p>1.目前不支持显示代码功能,</p>
				<p>2.小菜鸟正在努力开发中.</p>
				<p>3.给您造成的不便请谅解.</p>
				<p>4.详细代码请点击 <a href="https://github.com/healen/study-react">https://github.com/healen/study-react</a> </p>
			</pre>
		)
	}
}
