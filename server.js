var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('joblist', ['joblist']);

app.use(express.static(__dirname + "/public"));

app.get('/joblist', function(req, res){
	console.log("Got the GET request")

	db.joblist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});

app.listen(8080);
console.log("Server running on port 80808");