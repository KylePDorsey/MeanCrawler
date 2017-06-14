var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/joblist', function(req, res){
	console.log("Got the GET request")

	job1 = {
    	companyName: 'HP',
    	companyLocation: 'Overland Park KS',
    	jobTitle: 'IT Guy',
    	jobSummary: 'Just fix the keyboards when they break'
    };

    job2 = {
    	companyName: 'Torch',
    	companyLocation: 'Leawood KS',
    	jobTitle: 'Crawler Craziness',
    	jobSummary: 'Crawl the world and learn some things'
    };

    job3 = {
    	companyName: 'McDonalds',
    	companyLocation: 'Olathe KS',
    	jobTitle: 'Fry Cook',
    	jobSummary: 'Cook some fries and eat some fries'
    };

    var jobList = [job1, job2, job3];

    res.json(jobList);
});

app.listen(8080);
console.log("Server running on port 80808");