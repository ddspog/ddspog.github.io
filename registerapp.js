// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

homeApp.controller('RegisterController', function($scope) {
    $scope.isTab01 = true;
	$scope.isTab02 = false;
	$scope.isTab03 = false;
	$scope.tab01 = function(){
		$scope.isTab01 = true;
		$scope.isTab02 = false;
		$scope.isTab03 = false;
	};
	$scope.tab02 = function(){
		$scope.isTab01 = false;
		$scope.isTab02 = true;
		$scope.isTab03 = false;
	};
	$scope.tab03 = function(){
		$scope.isTab01 = false;
		$scope.isTab02 = false;
		$scope.isTab03 = true;
	};
	
});