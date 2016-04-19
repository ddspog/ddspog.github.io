// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

homeApp.controller('RegisterController', function($scope) {
	$scope.tab = function(index){
		switch (index){
			case 1:
				$(".mdl-tabs__tab-bar").removeClass("is-active");
				$("#tab1").toggleClass("is-active");
				break;
			case 2:
				$(".mdl-tabs__tab-bar").removeClass("is-active");
				$("#tab2").toggleClass("is-active");
				break;
			default:
				$(".mdl-tabs__tab-bar").removeClass("is-active");
				$("#tab3").toggleClass("is-active");
				break;
		}
	}
	$scope.tab(1);
});

$(".mdl-tabs__tab-bar.mdl-tabs__tab").after("");