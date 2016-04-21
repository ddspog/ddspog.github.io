// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

homeApp.controller('RegisterController', function($scope, $timeout) {
	$scope.terms_next_pressed = false;
	
	$scope.tab = function(index){
		$timeout(function() {
			switch (index){
				case 1:
					$(".site-tabs__tab-bar .site-tabs__tab").each( function(){
						$(this).removeClass("is-active");
					});
					$("#tab1").delay(500).addClass("is-active");
					break;
				case 2:
					$(".site-tabs__tab-bar .site-tabs__tab").each( function(){
						$(this).removeClass("is-active");
					});
					$("#tab2").delay(500).addClass("is-active");
					break;
				default:
					if($scope.terms_accepted){
						$scope.terms_next_pressed = false;
						$(".site-tabs__tab-bar .site-tabs__tab").each( function(){
							$(this).removeClass("is-active");
						});
						$("#tab3").delay(500).addClass("is-active");
					} else {
						$scope.terms_next_pressed = true;
					}
					break;
			}	
		}, 1);
	}
	$scope.tab(1);
});