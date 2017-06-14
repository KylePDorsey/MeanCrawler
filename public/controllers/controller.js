var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/joblist').success(function(response){
    	console.log("Got the data I requested.");
    	$scope.jobList = response;
    });

    $scope.addJob = function() {
    	console.log($scope.job);
    	$http.post('/joblist', $scope.job).success(function(response){
    		console.log(response);
    	});
    }

}]);