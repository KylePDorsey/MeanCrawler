# Mean Crawler
The goal of this project was to create a node.js server with the ability for a user to input an Indeed URL and scrape the following url for Job title, Company Name, Company Location, and Job Summary.  

Job Cannon header on webpage referes to one of my favorite It's Always Sunny in Philadelphia quotes.
Link to scene: https://www.youtube.com/watch?v=ZXnifPfxK0Q

## Getting Started

You will need node and MongoDB installed to get started.  
Other than that npm install command will include the required modules.
```
npm install
```

 Next node server.js  will run the server which you will be able to find on localhost:8080
 ```
 node server.js 
 ````


## Example
Once install is complete and server is running, copy and past Indeed url into the search bar 

Ex: https://www.indeed.com/cmp/EDZ-Systems/jobs/Senior-Software-Developer-610ab36a3d3140bf?sjdu=QwrRXKrqZ3CNX5W-O9jEva3MPmJ7L1SudzT3CZeWe-jQDbgBY-wq1Yr0EA1gbZWv9j3sH_XSpmw7FUKHj17IUjQ2b9Il319ZICwwVIqdchs

This will populate the Job title, Company Name, Company Location, and Job Summary immediately into the front end as well as the MonogoDB for safe keeping.  You can delete entries that you no longer need by clicking the delete button.
