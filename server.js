var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('joblist', ['joblist']);
var bodyParser = require('body-parser');
// var scraper = require('./scraper');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();




app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.get('/joblist', function(req, res){
	db.joblist.find(function(err, docs){
		res.json(docs);
	})
});

app.post('/joblist', function(req, res){
	db.joblist.insert(req.body, function(err, doc){
		res.json(doc);
	})
})

app.delete('/joblist/:id', function(req, res){
	var id = req.params.id;
	db.joblist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
})

app.post('/api/scrape', function(req, res){
	var url = req.body.url;

	if(url.indexOf('indeed') > -1) {
		request( url, function(error, resp, body) {
			console.log(url);

			if(error){
				console.log('Error Scraping');
			}

			if(!error){
				var $ = cheerio.load(body);
				var companyName = $('.company');
				var companyNameText = companyName.text();

				var jobTitle = $('.jobtitle font');
				var jobTitleText = jobTitle.text();

				var jobLocation = $('.location');
				var jobLocationText = jobLocation.text();

				var summary =$('#job_summary p');
				var summaryText = summary.text();

				var job = {
					jobTitle: jobTitleText,
					companyLocation: jobLocationText,
					companyName: companyNameText,
					jobSummary: summaryText
				};

				console.log('Successfully Scraped ', job);

				// res.json(job);
				db.joblist.insert(job, function(err, doc){
					res.json(doc);
				})
			}
		});
	} else {
		console.log('cannot locate scraper');
	}
});

app.listen(8080);
console.log("Server running on port 80808");