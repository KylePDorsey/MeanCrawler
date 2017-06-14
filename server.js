var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('joblist', ['joblist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.get('/joblist', function(req, res){
	console.log("Got the GET request")

	db.joblist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});

app.post('/joblist', function(req, res){
	console.log(req.body);
	db.joblist.insert(req.body, function(err, doc){
		res.json(doc);
	})
})

app.listen(8080);
console.log("Server running on port 80808");