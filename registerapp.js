// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

homeApp.controller('RegisterController', function($scope) {
	$scope.tab = function(index){
		switch (index){
			case 1:
				$( "#tab1" ).click();
				break;
			case 2:
				$( "#tab2" ).click();
				break;
			default:
				$( "#tab3" ).click();
				break;
		}
	}
	$scope.tab(1);
});

$(".mdl-tabs__tab-bar.mdl-tabs__tab").after("");