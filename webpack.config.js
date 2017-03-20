var path = require("path");
var webpack = require("webpack")
module.exports = {
	entry:path.join(__dirname,'app','main.js'),
	output:{
		path:path.join(__dirname,'build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loader:'babel-loader',
				exculde:/node_modules/,
				query:{
					presets:['es2015','react']
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
				
			},
			{
				test:/\.less/,
				loader:'style-loader!css-loader!less-loader'
				
			}
			,
			{
				test:/\.(png|jpg|jpeg|gif)/,
				loader:'url-loader?limit=25000'
				
			}
		]
	},
	resolve:{
		extendsions:['','.coffee','.js','.less']
	},
	// plugins: [
 //    new webpack.optimize.UglifyJsPlugin({
 //      compress: {
 //        warnings: false
 //      }
 //    })
 //  ],

	watch:true
}