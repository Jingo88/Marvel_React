var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var defaultPath = path.resolve(__dirname, 'app', 'index.js');

var wPCompile = webpack(webpackConfig);

var port = 8000;

var api = require('marvel-api');
var marvelpublickey = process.env.MARVELAPIPUBLIC
var marvelprivatekey = process.env.MARVELAPIPRIVATE

console.log(marvelprivatekey)
console.log(marvelpublickey)

var marvel = api.createClient({
	publicKey: marvelpublickey,
	privateKey: marvelprivatekey
});

app.use(require('webpack-dev-middleware')(wPCompile, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(wPCompile));

app.get('*', function(req,res){
	res.sendFile(defaultPath);
});

app.listen(port, 'localhost', function(err){
	if(err){
		console.log(err);
		return
	}
	console.log("Listening on Port " + port);
});

