
var path=require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var Extrat = require('extract-text-webpack-plugin');
var extratLess = new Extrat('css/[name].css')
var extratCss = new Extrat('css/[name]-css.css')
// var EtwpLESS = new Etwp({filename:'css/[name].less'});
var ROOT_PATH = __dirname;
var SRC_PATH = path.resolve(ROOT_PATH,"src");

var DIST_PATH = path.resolve(ROOT_PATH,"dist");

var TEMPLATE_PATH=path.resolve(SRC_PATH,'view')

module.exports = {
	entry:{
		index:path.join(SRC_PATH,"main.js"),
		voders:[path.join(SRC_PATH,"voders/jquery.min.js"),path.join(SRC_PATH,"voders/drift.zxd.js")]
		
	},
	output:{
		path:DIST_PATH,
		filename:"js/[name].js"
	},

	module:{
		rules:[
			{
		        test: /\.css$/,
		        // use:['style-loader','css-loader','less-loader']
		        use:extratCss.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
							options: {
							  modules: false
							  // minimize:true
							}
						}
					],
				}) 
		    },
			{
		        test: /\.less$/,
		        // use:['style-loader','css-loader','less-loader']
		        use:extratLess.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
							options: {
							  modules: false,
							  // minimize:true
							}
						},
						{
							loader: 'less-loader'
						}
					],
				}) 
		    },
		    
		    {
		    	test:/\.jsx?/,
		    	use: [{
		          loader: "babel-loader",
		          options: { presets: ["es2015","react"] }
		        }]
		    },
			{
				test:/\.(png|jpg|jpeg|gif)/,
				use:[{
					loader:'url-loader?limit=250000'
				}]
				
			}
		]
	},
	plugins:[
		extratLess,
		extratCss,
		// new Etwp('css/[name].css'),
		new HtmlWebpackPlugin({
			title:"this is my frist webpack ",
			template:path.join(TEMPLATE_PATH,'index.html'),
			hash:false,
			// minify:{ //压缩HTML文件
		 //        removeComments:true,    //移除HTML中的注释
		 //        collapseWhitespace:true    //删除空白符与换行符
		 //    }
		}),
		// new webpack.optimize.UglifyJsPlugin({    //压缩代码
	 //       compress: {
	 //           warnings: false
	 //       },
	 //       except: ['$super', '$', 'exports', 'require']    //排除关键字
	 //    })
	],
	watch:true
}
