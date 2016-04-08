﻿// Declare FeedApp (used on html tag of index.html)
var feedApp = angular.module('FeedApp', ['ui.router', 'ngSanitize']);

/* Directive declaring a navbar, linking to other sections of page, brand  */
feedApp.directive('navBar', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=item'
    },
    controller: ['$scope', '$parse', "$http", "$window", function($scope, $parse, $http, $window) {
      $scope.callFunc = function(exp) {
        $parse(exp)($scope); //Parse the function name to get the expression and invoke it on the scope
      };
      $scope.logout = function() {
        $http.get('/logout').success(function() {
          $window.location.reload();
        }).error(function() {});
      };
    }],
    templateUrl: 'directives/big-navbar.html'
  };
});

/* Directive declaring a footer bar, linking to other sections of page, and credits */
feedApp.directive('footBar', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=item'
    },
    templateUrl: 'directives/footbar.html'
  };
});

// Controller that works on all Homepage
feedApp.controller('FeedController', function($scope) {
    $scope.navbarText = {
		brand: {
			text: 'GetCake',
			url: 'ads'
		},
		username: 'Dennis Dantas',
		userbtn: {
			before: [
				{ url: '/logout',
				  icon: 'sign-out',
				  text: 'Logout'   }
			],
			divided: false
		},
		navbarbtn: [
			{ url: 'ads',
			  icon: 'sign-out',
			  text: 'Anúncios',
			  hasChild: false   }
		]
	};
    $scope.footbarText = {
		btns: [
			{ text: 'Anúncios',
			  url: 'ads'         }
		],
		credits: [
			'Copyright © FriendlyFood 2016. Todos os direitos reservados.',
			'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
		]
	};
});

// Controller that works only on Initial section
feedApp.controller('AdsController', function($scope) {
	$scope.labels = {
		adsscreen: 'Anúncios'
	};
	$scope.ads = [
		{
			title: 'Red Velvet Cake',
			chef: 'Panificadora Severo',
			imglink: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d26_red_velvet_cake.jpg.rend.sniipadlarge.jpeg',
			scale: 'lg-6'
		},
		{
			title: 'Banana Split Cheesecake',
			chef: 'Doces Maria Amor',
			imglink: 'http://www.shugarysweets.com/wp-content/uploads/2014/04/banana-split-cheesecake-1.jpg',
			scale: 'lg-4'
		},
		{
			title: 'Caramel Apple Cheesecake',
			chef: 'Panificadora Severo',
			imglink: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2007/4/12/0/bt0206_applecheesecake.jpg.rend.sniipadlarge.jpeg',
			scale: 'lg-3'
		},	
		{
			title: 'Torta Alemã',
			chef: 'Panificadora Severo',
			imglink: 'http://receitatodahora.com.br/wp-content/uploads/2014/09/Torta-alem%C3%A3.jpg',
			scale: 'lg-5'
		}			
	];
});


// Make sections on the screen, to work when called via buttons
feedApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  // States
  $stateProvider
    .state('ads', {
      url: '/',
      templateUrl: 'sections/ads.html',
      controller: 'AdsController'
    });
}]);