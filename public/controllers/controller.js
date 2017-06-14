var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

	var refreshPage = function(){
		$http.get('/joblist').success(function(response){
	    	$scope.jobList = response;
		    $http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD').success(function(response){
		    	$scope.ethPrice = Object.values(response)[0];
		    });
    		$scope.job = "";
		});
	}
    $http.get('/joblist').success(function(response){
    	$scope.jobList = response;
    	$http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD').success(function(response){
	    	$scope.ethPrice = Object.values(response)[0];
	    });
    });

    $scope.addJob = function() {
    	$http.post('/api/scrape',{
			url: $scope.job.jobUrl
		}).success(function(response){
    		refreshPage();
    	});
    };

    $scope.remove = function(id) {
    	$http.delete('/joblist/' + id).success(function(response){
    		refreshPage();
    	});
    };

}]);