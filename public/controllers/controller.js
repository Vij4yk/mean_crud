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

	$scope.remove = function(id){
		$http.delete('/countries/' + id ).success(function(response){
			refresh();
		})
	}

	$scope.edit = function(id, response){
		$http.get('/countries/' + id ).success(function(response){
			$scope.country = response;
			
		})
	}	
})

