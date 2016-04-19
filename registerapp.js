// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

homeApp.controller('RegisterController', function($scope) {
	$scope.tab = 1;
});

$(".mdl-tabs__tab-bar.mdl-tabs__tab").after("");