var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/joblist').success(function(response){
    	console.log("Got the data I requested.");
    	$scope.jobList = response;
    });

}]);