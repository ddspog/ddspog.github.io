// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

homeApp.controller('RegisterController', function($scope) {
	$scope.tab1 = false;
	$scope.tab2 = false;
	$scope.tab3 = false;
	$scope.tab = function(index){
		switch (index){
			case 1:
				$scope.tab1 = true;
				$scope.tab2 = false;
				$scope.tab3 = false;
				break;
			case 2:
				$scope.tab1 = false;
				$scope.tab2 = true;
				$scope.tab3 = false;
				break;
			default:
				$scope.tab1 = false;
				$scope.tab2 = false;
				$scope.tab3 = true;
				break;
		}
	}
	$scope.tab(1);
});

$(".mdl-tabs__tab-bar.mdl-tabs__tab").after("");