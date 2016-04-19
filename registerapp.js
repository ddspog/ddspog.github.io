// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('RegisterApp', ['ui.router', 'ngSanitize']);

homeApp.controller('RegisterController', function($scope, $timeout) {
	$scope.tab = function(index){
		$timeout(function() {
			switch (index){
				case 1:
					$(".mdl-tabs__tab-bar .mdl-tabs__tab").each( function(){
						$(this).removeClass("is-active");
					});
					$("#tab1").delay(500).addClass("is-active");
					break;
				case 2:
					$(".mdl-tabs__tab-bar .mdl-tabs__tab").each( function(){
						$(this).removeClass("is-active");
					});
					$("#tab2").delay(500).addClass("is-active");
					break;
				default:
					$(".mdl-tabs__tab-bar .mdl-tabs__tab").each( function(){
						$(this).removeClass("is-active");
					});
					$("#tab3").delay(500).addClass("is-active");
					break;
			}	
		}, 2000);
	}
	$scope.tab(1);
});

$(".mdl-tabs__tab-bar.mdl-tabs__tab").after("");