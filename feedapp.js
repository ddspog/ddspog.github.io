// Declare FeedApp (used on html tag of index.html)
var feedApp = angular.module('FeedApp', ['ui.router', 'ngSanitize']);

/* Directive declaring a navbar, linking to other sections of page, brand  */
feedApp.directive('navBar', function() {
  return {
    restrict: 'A',
    scope: {
      item: '=item'
    },
    templateUrl: 'directives/big-navbar.html'
  };
});

feedApp.directive('toolBar', function() {
  return {
    restrict: 'A',
    scope: {
      item: '=item',
	  title: '=title'
    },
	controller: ['$parse', "$http", "$window", "$state", function($scope, $parse, $http, $window, $state) {
			$scope.callFunc = function(exp) {
				$parse(exp)($scope); //Parse the function name to get the expression and invoke it on the scope
			};
			$scope.logout = function() {
				$http.get('/logout').success(function() {
					$window.location.reload();
				}).error(function() {});
			};
			$scope.getStateName = function(){
				try {
					$scope.currentState = $state.get($state.current).data.title;
				}
				catch(err) {
					$scope.currentState =  '';
				}
			};
		}],
    templateUrl: 'directives/toolbar.html'
  };
});

/* Directive declaring a footer bar, linking to other sections of page, and credits */
feedApp.directive('footBar', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=item'
    },
    templateUrl: 'directives/big-footbar.html'
  };
});

/* Directive declaring a Ad card, showing informations of a cake announced */
feedApp.directive('adCard', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=item',
	  labels: '=labels',
	  index: '=index'
    },
    templateUrl: 'directives/adCard.html'
  };
});

/* Directive declaring a Ad Modal, showing more informations of a cake announced */
feedApp.directive('adModal', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=item',
	  labels: '=labels',
	  index: '=index'
    },
    templateUrl: 'directives/adModal.html'
  };
});

// Controller that works on all Homepage
feedApp.controller('FeedController', ["$scope", "$state", function($scope, $state) {
	$scope.setStateTitle = function(){
	  try{
		  $scope.title = $state.current.data.title;
	  } catch (err) {
		  $scope.title = '';
	  }
	}
    $scope.navbarText = {
		logo: {
			text: 'GetCake',
			url: 'ads',
			imglink: 'favicon.svg'
		},
		sections: [
			{
				name: 'Anúncios',
				icon: 'cake',
				url: 'ads'
			}
		]
	};
	$scope.toolbarText = {
		user: {
			name: 'Dennis Dantas',
			icon: 'person',
			btns: [
				{ url: '/logout',
				  icon: 'logout',
				  text: 'Logout'   }
			]
		} 
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
}]);

// Controller that works only on Initial section
feedApp.controller('AdsController', function($scope) {
	$scope.setStateTitle();
	$scope.labels = {
		card: {
			contact: 'Contatos',
			contacts: 'Contatos: ',
			address: 'Endereços: ',
			close: 'Fechar',
			profile: 'Ir ao Perfil'
		}
	};
	$scope.adsList = [
		{
			title: 'Red Velvet Cake',
			chef: 'Panificadora Severo',
			imglink: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d26_red_velvet_cake.jpg.rend.sniipadlarge.jpeg',
			price: '60,00',
			contact: '(83) 3321-2021',
			address: 'R. Antenor Navarro, 178 - Prata, Campina Grande - PB, 58400-520'
		},
		{
			title: 'Banana Split Cheesecake',
			chef: 'Doces Maria Amor',
			imglink: 'http://www.shugarysweets.com/wp-content/uploads/2014/04/banana-split-cheesecake-1.jpg',
			price: '40,00',
			contact: '(83) 3303-5433',
			address: 'R. Miguel Couto, 262 - Centro, Campina Grande - PB, 58400-270'
		},
		{
			title: 'Caramel Apple Cheesecake',
			chef: 'Panificadora Severo',
			imglink: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2007/4/12/0/bt0206_applecheesecake.jpg.rend.sniipadlarge.jpeg',
			price: '20,00',
			contact: '(83) 3321-2021',
			address: 'R. Antenor Navarro, 178 - Prata, Campina Grande - PB, 58400-520'
		},	
		{
			title: 'Torta Alemã',
			chef: 'Panificadora Severo',
			imglink: 'http://receitatodahora.com.br/wp-content/uploads/2014/09/Torta-alem%C3%A3.jpg',
			price: '50,00',
			contact: '(83) 3321-2021',
			address: 'R. Antenor Navarro, 178 - Prata, Campina Grande - PB, 58400-520'
		},
		{
			title: 'Red Velvet Cake',
			chef: 'Bolos Doce Paixão',
			imglink: 'https://s3.amazonaws.com/twduncan/recipe/1778/hero-cherry-red-velvet-cake.jpg',
			price: '30,00',
			contact: '(83) 3333-5211',
			address: 'R. Irineu Joffily, 176 - Centro, Centro, Campina Grande - PB, 58101-030'
		},
		{
			title: 'Bolo de Rapadura',
			chef: 'Bolos Doce Paixão',
			imglink: 'http://mdemulher.abril.com.br/sites/mdemulher/files/styles/retangular_horizontal_2/public/migracao/receita-bolo-rapadura.jpg?itok=6C_EiXVJ',
			price: '40,00',
			contact: '(83) 3333-5211',
			address: 'R. Irineu Joffily, 176 - Centro, Centro, Campina Grande - PB, 58101-030'
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
		data: {
			title: 'Anúncios'
		},
		views: {
			'main' : { 		
				templateUrl: 'sections/ads-main.html',
				controller: 'AdsController'
			},
			"modals" : {
				templateUrl: 'sections/ads-modals.html',
				controller: 'AdsController'
			}
		}
	});
}]);

feedApp.run(function($rootScope, $timeout) {
    $timeout(function() {
        Modal.init();
    }, 5000);
});