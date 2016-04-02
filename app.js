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

homeApp.directive('banner', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/banner.html'
    };
});

homeApp.directive('parA', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/parA.html'
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
});

homeApp.controller('InitController', function($scope) {
    $scope.headerText = {
		maintitle: 'O bolo dos seus sonhos.',
		subtitle: 'Descubra confeiteiros em sua cidade. Faça encomendas faltando poucos dias para a festa. Compare preços. Avalie. Escolha os seus favoritos. Converse.',
		social: [
			{ text: 'Login via Facebook',
			  icon: 'facebook-official',
			  url: '/login' },
			{
			  text: 'Ver anúncios',
			  icon: 'birthday-cake',
			  url: '/dashboard'
			}
		],
		cellphoneimg: 'https://lh3.googleusercontent.com/wgSvsQJ2SFp4R2MbxNMyK-XtLZ6ONomliNQUH4SmWPLpVeOhGi7wWA8QL3RfhT3SckG35LIMgNR3GjT5DjRZxnQn86GAnYboBCSRKXToIDCQXlT_fFjhSTPPQS2wfFmI-sazLlgR7Owf3N0jghb-s5LhInpX_Ne9vGKXlUYEpk4wARDb7xCiwX-W6Qw33J9yKbs051ZmOvhxAlCuu_81ujdxu8NDz_fuLOh0dng65mPD0cofdlzkBKcPO0A5kB1OzaF7k4HoX0GhlbjScN0J5nJSZGP3-5RirwoY3FPg_c3Ft6Ei_NHJ_HKNdh4N4KMRiwyMqMBv9sLMfo_N5IE6sPTWuXBInft5CVyRidtzq_3NIbA5rjPnGioA13z6-coF25HNGOmNCwYduM0-bPRRikY4BOLLrTTkFd_1gAY2tiBflCMGNJmqy_06RTRyVjVNrOg_Ot56pabQ5W06K16MsoiV51QLwoPGQChVyIOJAsMIxLeNaKCOzNB-ITvtWMchEPywoc_g8u-vpFr2M1pYjWNlcox4WfksY27jLmh_pT1pa3hpAfIyr8vIP7PaPjSoxmlA2A=s570-no',
		hdstyle: {
			background: 'url(https://lh3.googleusercontent.com/JwmDbAvjBq3HuiN70ubrUePjuqWaVEM2Wktt8se_W1G6WoROTWbpX4woDhxaIQI9mY15PfjinYC87W_hKDLYZ2_3hWbuoTpOv-czMV8zD-KHumr0NpildY8kTr3lZNo4nAlg-jBmm81PQy1eeYyQaxLLRpuuRNswEMrMa_YHv6TFifry-kQ4aWXweW7rkKT-lwKD2HsFGy5aoin8kJQFQvGbbmJS5GPQkdV5eShxhheOvcZ8CwV9lG4gBVfm8x8VN6eTnxV_LZgAJFc-pOsRmkCssqZSC1AVvm5fD0gtglh6-16ligWiP1WNR008fhiMPQSoKjEC420lKy5YdFlMVYVhyGNn4wBjYPoWNJuJet0eN9QSG3b2ldFQH6hQNV_X9U85oXF0GoEu8MQD1MvT4IXk5LUwf0b9Oq2BISko-tggiqmNwnOw7jQRQK-8l0zmCFP_5-I7jDoDFqRq_RVxGglwhLRHIZ4hn-M4RBZgqyev99apuwE-Y9vM94-dGcVh1rCQZ1pQdvLXZ9Hh76dn9LqlZiIf1Kk2uVl4jxAzMLzAhW1BlKiV5K2SVAalZDpBkaOjkw=w1002-h667-no) no-repeat center center',
			padding-top: '50px',
			padding-bottom: '50px',
			text-align: 'center',
			color: '#f8f8f8',
			background-size: 'cover'
		}
	};
});

homeApp.controller('AboutController', function($scope) {
    $scope.bannerText = {
		message: 'Sobre nós',
		bnstyle: {
			background: 'url(https://lh3.googleusercontent.com/qJIoF_ISk_nIzyUstkxX4bpCUsqBvqFcqBsedfc4CrneBimSUem9SMgUZK4pSaWBgxh-QCs7eKvfhEYLcmvULdudAf9x7F1e6i7LZOyG65C8kr7_n1xA7d_fEOcdqaS9FWDupisXyw07mRs4ZYpCCsAg9gLR-w6fX4GMQHalC57j3HhWrfMT2eQ_OzUo37meMl3G0khC7IEFtJ3RSyPDB0-MtebkQfjY4dSgZeqjJihcMebOxsf8_Aih-DwWbOmGx0kK7vKzoW5kJtbGQp1QZwt3wQwKGqoGvyiX6aEpK-ct_C1W0fUBvOTsgDOG5ropnHzCtsITnpsrgpCarrby2mr23Gl7BscSBukyGmeyvX-CqpPNwcXlTAg2RnP6my5mFTNNra6TS2v4HObrrYrkNo8clWbN9hvvMRdGIqdO4IPfIRu2W5RYUakTpWDqDXgQ-wIkWCuK7FZ6U06fPhj97Rme2IeW1PmU5eB_rXvXRo0xLqp3uCi83D7Jvx1axbqDi91mwoIUK25-eQJS5xAcpI24OHMDmxE8KG-V9swhtJwAogea7_b_AphBO5HhZyNuIca2Bg=w1000-h667-no) no-repeat center center',
			padding: '100px 0',
			color: '#f8f8f8',
			background-size: 'cover'
		}
	};
	$scope.parAText = {
		title: 'Nossa inspiração',
		partA: 'Quando o prazo de uma festa aperta, muitas pessoas correm desesperadas para encomendar o precioso Bolo. Seja aniversário de alguém, chá de bebê ou festa de despedida, o brasileiro gosta de um Bolo bonito e gostoso para adoçar diversas ocasiões. Porém, a encomenda de bolos é feita via telefone, mensagens de texto, requirindo do cliente o contato do confeiteiro. Mas o contato nem sempre é fácil de achar, e quando o cliente, depois de saber que todos os seus costumeiros confeiteiros estão cheios para a data, fica desesperado sem ter a garantia de um bolo para a próxima festa.',
		partB: 'Morando em Campina Grande, vemos muito essas situações. A maioria das pessoas quase sempre encomenda (por preferência) a um lugar só. Mas existem vários confeiteiros na cidade, e por questão de falta de tempo, aumento no preço, ou porque o confeiteiro parou de seguir no ramo, nos deparamos no problema de escolher o novo confeiteiro da vez. Não é uma tarefa fácil, é preciso pesquisar novos contatos, descobrir a opinião dos outros sobre ele, verificar se o preço é acessível, entre outras coisas. Falta no Brasil um ramal único com esses dados. É aí que podemos ajudar.'
	};
});

homeApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /initial
    $urlRouterProvider.otherwise("/");

    // States
    $stateProvider
        .state('initial', {
            url: "/",
            templateUrl: 'sections/initial.html',
			controller: 'InitController'
        })
		.state('about', {
			url: "/",
			templateUrl: 'sections/about.html',
			controller: 'AboutController'
		})
}]);