'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [


])

.controller('AppCtrl', ['$scope', '$http', function ($scope, $http){

	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			//console.log("Données reçues");
			$scope.contactList = response;
			$scope.contact = "";
		});
	};

	refresh();

	
	$scope.addContact = function(){
		$http.post('/contactlist', $scope.contact).success(function(response){
			//console.log(response);
			refresh();
		});
	};

	
	$scope.delContact = function(id){
		//console.log(id);
		$http.delete('/contactlist/' + id).success(function(response){
			refresh();
		});
	};

	
	$scope.editContact = function(id){
		//console.log(id);
		$http.get('/contactlist/' + id).success(function(response){
			$scope.contact = response;
		});
	};


	$scope.updateContact = function(){
		//console.log($scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
			refresh();
		});
	};

	$scope.deselect = function(){
		$scope.contact = "";
	}

}])



	
	
