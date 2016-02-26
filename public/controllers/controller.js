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
		$http.post('/countries', $scope.country)
		.success(function(response){
			refresh();
		});
	}

	$scope.removeCountry = function(id){
		$http.delete('/countries/' + id ).success(function(response){
			refresh();
		})
	}

	$scope.editCountry = function(id, response){
		$http.get('/countries/' + id ).success(function(response){
			$scope.country = response;
			
		})
	}

	$scope.updateCountry = function(){
		$http.put('/countries/' + $scope.country._id, $scope.country).success(function(response){
			refresh();
			$scope.country = "";
		})
		
	}
})

