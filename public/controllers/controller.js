var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

	var refreshPage = function(){
		$http.get('/joblist').success(function(response){
	    	$scope.jobList = response;
    		$scope.job = "";
		});
	}
    $http.get('/joblist').success(function(response){
    	$scope.jobList = response;
    });

    $scope.addJob = function() {
    	console.log("in controller");
    	$http.post('/api/scrape',{
			url: $scope.job.jobUrl
		}).success(function(response){
    		refreshPage();
    	});
    };

    $scope.remove = function(id) {
    	console.log(id);
    	$http.delete('/joblist/' + id).success(function(response){
    		refreshPage();
    	});
    };

}]);