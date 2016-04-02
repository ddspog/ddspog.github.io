// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('HomepageApp', ['ui.router', 'ngSanitize']);

homeApp.directive('navBar', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/navbar.html'
    };
});

homeApp.directive('footBar', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/footbar.html'
    };
});

homeApp.directive('header', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/header.html'
    };
});

homeApp.controller('HomeController', function($scope) {
    $scope.navbarText = {
		brand: {
			text: 'GetCake',
			url: 'initial'
		},
		btns: [
			{ text: 'Sobre',
			  url: 'about'     },
			{ text: 'Serviços',
			  url: 'services'  },
			{ text: 'Contato',
			  url: 'contact'   }
		]
	};
    $scope.footbarText = {
		btns: [
			{ text: 'Home',
			  url: 'initial'   },
			{ text: 'Sobre',
			  url: 'about'     },
			{ text: 'Serviços',
			  url: 'services'  },
			{ text: 'Contato',
			  url: 'contact'   }
		],
		credits: [
			'Copyright © FriendlyFood 2016. Todos os direitos reservados.',
			'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
		]
	};
    $scope.headerText = {
		maintitle: 'O bolo dos seus sonhos.',
		subtitle: 'Descubra confeiteiros em sua cidade. Faça encomendas faltando poucos dias para a festa. Compare preços. Avalie. Escolha os seus favoritos. Converse.',
		social: [
			{ text: 'Login via Facebook',
			  icon: 'facebook-official',
			  url: '/login' }
		],
		cellphoneimg: 'https://lh3.googleusercontent.com/wgSvsQJ2SFp4R2MbxNMyK-XtLZ6ONomliNQUH4SmWPLpVeOhGi7wWA8QL3RfhT3SckG35LIMgNR3GjT5DjRZxnQn86GAnYboBCSRKXToIDCQXlT_fFjhSTPPQS2wfFmI-sazLlgR7Owf3N0jghb-s5LhInpX_Ne9vGKXlUYEpk4wARDb7xCiwX-W6Qw33J9yKbs051ZmOvhxAlCuu_81ujdxu8NDz_fuLOh0dng65mPD0cofdlzkBKcPO0A5kB1OzaF7k4HoX0GhlbjScN0J5nJSZGP3-5RirwoY3FPg_c3Ft6Ei_NHJ_HKNdh4N4KMRiwyMqMBv9sLMfo_N5IE6sPTWuXBInft5CVyRidtzq_3NIbA5rjPnGioA13z6-coF25HNGOmNCwYduM0-bPRRikY4BOLLrTTkFd_1gAY2tiBflCMGNJmqy_06RTRyVjVNrOg_Ot56pabQ5W06K16MsoiV51QLwoPGQChVyIOJAsMIxLeNaKCOzNB-ITvtWMchEPywoc_g8u-vpFr2M1pYjWNlcox4WfksY27jLmh_pT1pa3hpAfIyr8vIP7PaPjSoxmlA2A=s570-no'
	};
    $scope.bannerText = {};
    $scope.content = {};
});

homeApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /initial
    $urlRouterProvider.otherwise("/");

    // States
    $stateProvider
        .state('initial', {
            url: "/",
            templateUrl: 'sections/initial.html'
        })
}]);