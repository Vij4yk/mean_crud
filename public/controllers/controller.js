var geoApp = angular.module('geoApp', []);

geoApp.controller('mainCtrl', function($scope, $http) {
	
var refresh = function() {	
	$http.get('/countries').success(function(response){
		$scope.countries = response;
		$scope.country = "";
	});
};

refresh();

$scope.addCountry = function(){
	console.log($scope.country)
	$http.post('/countries', $scope.country)
	.success(function(response){
		refresh();
	});
}	
})

