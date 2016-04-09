// Declare FeedApp (used on html tag of index.html)
var feedApp = angular.module('FeedApp', ['ui.router', 'ngSanitize', 'ngMaterial']);
feedApp.config(function ($mdIconProvider) {
	$mdIconProvider
		.iconSet("call", "communication-icons.svg", 24);
});

feedApp.directive("menuLink", function() {
	return {
		scope: {
			section: "="
		},
		templateUrl: "directives/menu-link.html",
		link: function(e, t) {
			var a = t.parent().controller();
			e.isSelected = function() {
				return a.isSelected(e.section);
			},
			e.focusSection = function() { 
				a.autoFocusContent = !0;
			}
		}
	}
});

feedApp.directive("menuToggle", ["$timeout", "$mdUtil", function(e,t) {
	return {
		scope: {
			section: "="
		},
		templateUrl: "directives/menu-toggle.html",
		link: function(a,n) {
			var o = n.parent().controller();
			a.isOpen = function() {
				return o.isOpen(a.section)
			},
			a.toggle = function(){
				o.toggleOpen(a.section)
			},
			t.nextTick(function() {
				a.$watch(function() {
					return o.isOpen(a.section)
				}, function(t) {
					function a() {
						var e;
						return o.addClass("no-transition"),
							   o.css("height", ""),
							   e = o.prop("clientHeight"),
							   o.css("height", 0),
							   o.removeClass("no-transition"),
							   e
					}
					var o = n.find("ul"), i = t ? a() : 0;
					e(function() {
						o.css({
							height: i + "px"
						})
					}, 0, !1)
				})
			});
			var i = n[0].parentNode.parentNode.parentNode;
			if(i.classList.contains("parent-list-item")) {
				var l = i.querySelector("h2");
				n[0].firstChild.setAttribute("aria-describedby", l.id);
			}
		}
	}
}]);

/* Directive declaring a navbar, linking to other sections of page, brand  */
feedApp.directive('navBar', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=item'
    },
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
    templateUrl: 'directives/big-footbar.html'
  };
});

/* Directive declaring a Ad card, showing informations of a cake announced */
feedApp.directive('adCard', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=item'
    },
    templateUrl: 'directives/adCard.html'
  };
});

feedApp.directive('toolBar', function(){
	return {
		restrict: 'E',
		scope: {
			item: '=item'
		},
		controller: ['$scope', '$parse', "$http", "$window", "$state", function($scope, $parse, $http, $window, $state) {
			$scope.callFunc = function(exp) {
				$parse(exp)($scope); //Parse the function name to get the expression and invoke it on the scope
			};
			$scope.logout = function() {
				$http.get('/logout').success(function() {
					$window.location.reload();
				}).error(function() {});
			};
			$scope.getStateName = function(){
				return $state.get($state.current).data.title;
			};
			$scope.openMenu = function($mdOpenMenu, ev) {
				originatorEv = ev;
				$mdOpenMenu(ev);
			};
		}],
		templateUrl: 'directives/toolbar.html'
	};
});

// Controller that works on all Homepage
feedApp.controller('FeedController', function($scope) {
    $scope.navbarText = {
		logo: {
			text: 'GetCake',
			url: 'ads',
			imglink: 'favicon-128.png'
		},
		sections = [
			{
				type: 'link',
				name: 'Anúncios',
				url: 'ads'
			}
		]
	};
	$scope.toolbarText = {
		username: 'Dennis Dantas',
		hamlink: 'ham.svg',
		userlink: 'user.svg',
		userbtn: {
			[
				{ url: '/logout',
				  iconlink: 'logout.svg',
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
});

// Controller that works only on Initial section
feedApp.controller('AdsController', function($scope) {
	$scope.labels = {
		adscreen: {
			title: 'Anúncios',
			subtitle: 'Temos os contatos dos melhores confeiteiros de sua região. Se delicie navegando por nosso site!'
		}
	};
	$scope.ads = [
		{
			title: 'Red Velvet Cake',
			chef: 'Panificadora Severo',
			imglink: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d26_red_velvet_cake.jpg.rend.sniipadlarge.jpeg',
			price: '60,00'
		},
		{
			title: 'Banana Split Cheesecake',
			chef: 'Doces Maria Amor',
			imglink: 'http://www.shugarysweets.com/wp-content/uploads/2014/04/banana-split-cheesecake-1.jpg',
			price: '40,00'
		},
		{
			title: 'Caramel Apple Cheesecake',
			chef: 'Panificadora Severo',
			imglink: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2007/4/12/0/bt0206_applecheesecake.jpg.rend.sniipadlarge.jpeg',
			price: '20,00'
		},	
		{
			title: 'Torta Alemã',
			chef: 'Panificadora Severo',
			imglink: 'http://receitatodahora.com.br/wp-content/uploads/2014/09/Torta-alem%C3%A3.jpg',
			price: '50,00'
		},
		{
			title: 'Red Velvet Cake',
			chef: 'Bolos Doce Paixão',
			imglink: 'https://s3.amazonaws.com/twduncan/recipe/1778/hero-cherry-red-velvet-cake.jpg',
			price: '30,00'
		},
		{
			title: 'Bolo de Rapadura',
			chef: 'Bolos Doce Paixão',
			imglink: 'http://mdemulher.abril.com.br/sites/mdemulher/files/styles/retangular_horizontal_2/public/migracao/receita-bolo-rapadura.jpg?itok=6C_EiXVJ',
			price: '40,00'
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
      controller: 'AdsController',
	  data: {
		  title: 'Anúncios'
	  }
    });
}]);