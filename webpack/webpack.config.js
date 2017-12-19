var path = require('path');
var webpack = require('webpack');
var webpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports= {
	devServer:{
	    historyApiFallback:true,
	    hot:true,
	    inline:true,
	    progress:true,
	    port:8090 //端口你可以自定义
	},
	entry:'./src/main.js',
	output:{
		publicPath:'./dist/',//异步加载路径
		chunkFilename:'[name].js',//异步加载文件名
		libraryTarget:'umd',//包规范格式
		hashDigestLength:3,//hash值得位数
		//hash webpack编译过程，只有一个
		//chunkhash webpack对每个文件的hash,每个文件对应一个
		filename:'bundle.js',//输出文件名
		path:path.resolve(__dirname,'dist')//文件输出路径
	},
	devtool:'source-map',//支持源文件debugger，弱不加则会在编译之后的文件中显示debugger，不易于调试
	resolve:{
		alias:{
			a1:path.resolve(__dirname,'src/js/a1.js')//映射路径
		}
	},
	plugins:[
		new webpack.ProvidePlugin({
			$:'jquery'//不需要再在其他地方引入jQuery
		}),
		new webpackNotifierPlugin({
			title:'webpack',
			alwaysNotify:true
		}),
		new ExtractTextPlugin('style.css')//将css抽出来作为单独的文件,
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name:'common',
		// 	minChunk:Infinity
		// })
	],

	module:{
		rules:[
			{
				test:/\.css$/,

				use:[
					{loader:'style-loader'},
					{
						loader:'css-loader',
						// options:{
						// 	sourceMap:true,
						// }
					}
				]

			},
			{
				test:/\.scss$/,
					use:['style-loader','css-loader','sass-loader']
			},
			// 	{
			// 	test:/\.scss$/,
			// 	use:ExtractTextPlugin.extract({
			// 		fallback:'style-loader',
			// 		use:[
			// 			'css-loader',
			// 			{
			// 				loader:'sass-loader',
			// 				// options:{
			// 				// 	sourceMap:true
			// 				// }
			// 			}

			// 		]
			// 	})
			// },
			{
				test:/\.js$/,
				exclude:['node_modules'],//除了 node_modules文件夹
				use:[
					'babel-loader'
				]

			},
			{
				test:/\.(png|jpg|Gif)/,
				use:[
					{
						loader:'file-loader',
						options:{
							name:'[name].[ext]',
							publicPath:'./src/assets',
							outputPath:'images/'
						}
					}

				]
			}

		]
	}
}