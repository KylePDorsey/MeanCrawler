var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/joblist').success(function(response){
    	$scope.jobList = response;
    });


    $scope.addJob = function() {
    	$http.post('/joblist', $scope.job).success(function(response){
    		$scope.job = "";
    		$http.get('/joblist').success(function(response){
		    	$scope.jobList = response;
		    });
    	});
    };

}]);