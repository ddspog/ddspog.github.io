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

homeApp.directive('contentA', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/contenta.html'
    };
});


homeApp.directive('contentB', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/contentb.html'
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
    $scope.header = {
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
			'background': 'url(https://lh3.googleusercontent.com/JwmDbAvjBq3HuiN70ubrUePjuqWaVEM2Wktt8se_W1G6WoROTWbpX4woDhxaIQI9mY15PfjinYC87W_hKDLYZ2_3hWbuoTpOv-czMV8zD-KHumr0NpildY8kTr3lZNo4nAlg-jBmm81PQy1eeYyQaxLLRpuuRNswEMrMa_YHv6TFifry-kQ4aWXweW7rkKT-lwKD2HsFGy5aoin8kJQFQvGbbmJS5GPQkdV5eShxhheOvcZ8CwV9lG4gBVfm8x8VN6eTnxV_LZgAJFc-pOsRmkCssqZSC1AVvm5fD0gtglh6-16ligWiP1WNR008fhiMPQSoKjEC420lKy5YdFlMVYVhyGNn4wBjYPoWNJuJet0eN9QSG3b2ldFQH6hQNV_X9U85oXF0GoEu8MQD1MvT4IXk5LUwf0b9Oq2BISko-tggiqmNwnOw7jQRQK-8l0zmCFP_5-I7jDoDFqRq_RVxGglwhLRHIZ4hn-M4RBZgqyev99apuwE-Y9vM94-dGcVh1rCQZ1pQdvLXZ9Hh76dn9LqlZiIf1Kk2uVl4jxAzMLzAhW1BlKiV5K2SVAalZDpBkaOjkw=w1002-h667-no) no-repeat center center',
			'padding-top': '50px',
			'padding-bottom': '50px',
			'text-align': 'center',
			'color': '#f8f8f8',
			'background-size': 'cover'
		}
	};
});

homeApp.controller('AboutController', function($scope) {
    $scope.bnIni = {
		message: 'Sobre o GetCake',
		bnstyle: {
			'background': 'url(https://lh3.googleusercontent.com/YZVdC2W9rnCYVu0D8MdA2SmxLTPK-EPLIhBvAT_uQqefnzv_5BkwBMCDYut8vM432a2a2dfDf9u4ZDOSCYvcfKg2TWzGc7r9iD5iIqrC90We-0kH8odSubEvPlWMXj60Zz0PiVmxKCvDvbULtDFB9tzfwq3fOwpBzxM9OxMOkXxLt7ev_7T4j6DYbWGu9-4difl1WFTsmmzAjMCIOm_TNE8PgFVvm6rTHrCHAsCPgErjBB05fOtH3_GyzY83d2HJU4naId5ENBHT_vC9SwiXrgEuOnxfer20lYnbgrcDKuRL2vzQVbyfMbXiX2Re3S34nvEPVz2AZbF4oqDBiOTMjFHQB1T7oyKYuODOW-QGH_eH_JAXKswBVhmWsmojMIoTV6WOUC1uHaSalb9tF0Jjd7DdD-ynhup-juyRfv2kmTww45n0ykKrNsk5j0NPcb9N9g5e_9f_UwZq4HArkPTvRKyUXfKmNtar2YYFl1mV_U9Cwa43W8G5JXKyaBT2ag8QEO2iyMNqEOQhiRLe57fran_oiJn8rNi0pYR6BR5fUaFK9VBe8I-4C9GE9FabHt9jtN5kDg=w1000-h667-no) no-repeat center center',
			'padding': '100px 0',
			'color': '#f8f8f8',
			'background-size': 'cover'
		}
	};
	$scope.parA = {
		title: 'Como funciona o GetCake?',
		partA: 'Quando o prazo de uma festa aperta, muitas pessoas se desesperam para encomendar um Bolo. Seja aniversário de alguém, festa de despedida, comemoração em repartições, o brasileiro gosta de um Bolo bonito e gostoso para adoçar diversas ocasiões. Porém, a encomenda de bolos é feita via telefone, mensagens de texto, requirindo do cliente o contato do confeiteiro. Mas o contato nem sempre é fácil de achar.',
		partB: 'È preciso pesquisar na internet, perguntar a amigos, descobrir a opinião geral sobre os bolos, verificar preço acessível, etc. Considerando sempre que existem vários confeiteiros despreocupados com o próprio marketing. Também fica difícil acompanhar aumento no preço, se alguém saiu do ramo. Falta no Brasil um local com esses dados, e com um canal melhor de comunicação nessa área. É aí que podemos entramos.'
	};
	$scope.conA = {
		header: [ 'Àreas de atendimento' ],
		content: 'Até o momento estamos limitando nossa região de funcionamento em Campina Grande/PB, enquanto melhoramos nosso site. Mas logo em breve conseguiremos contatos de confeiteiros em outras cidades e então no Brasil todo, e aí teremos lançado esse aplicativo!',
		imglink: 'https://lh3.googleusercontent.com/GDXGh7Yj6e0bjoxKcCCZBHEu7z2tC2WCUy-7V_bcY5m_vqoNierKq_OkLf-KrbdjsK7dkmEZ0UBC3EBrMqQVTIyNGcCdkshQsasfR7v9C0JQB0SCXdKILara00lPOal2fkdOhahADueXATDmpHVcKq8wAF0he2mhnQxjsqgD5DlZicr5ccPLvK42JttsNSCGJczVnwS14wYIfwyr_HzcFIeSnvbfg16y8CBhvaKuSBg1q1zIj1zuSBR3Uc6vG0XhueLEVm9MuPROvEaMhMfn3Yd7pyjR-zvBRdOEqLCvRU3dhAJXV5eiLK-gP-vRZQ_4WVOUiG2YUtJ2KFBcP2hW8do_TXhwkaFWxtkXlzyTMF_13dIjb3AI7IfLJ4Ybn6-jjkSn3-GYyqXPbRDOCGGX7NDjRPun2cYDfXCGe3Ow1QHR-blqWGVfH7-Y8ziKeMUi30doq4WGaY7-AW7ak0LOWnwhf9TyhH6zkEjrnpHar0aT-E4Rw0WSAk59KEw5KISMS1YSKL24Q7kfGZhjgeXwX0AHNk-blrToIwo7KH5ZnGeyKR46wjTzMcwyjjoZZnMUh8hNCg=w314-h208-no'
	},
	$scope.conB = {
		header: [ 'Nossa história' ],
		content: 'Em Campina Grande, temos muitas festas. E muita gente para fazer bolo. Mas já perdemos muitas festas, porque o bolo foi encomendado em cima da hora, e quando fomos pegar nosso contato preferido, ele nos diz que está cheio. Depois que a festa passa, descobrimos que havia uma vizinha nossa perto de casa, que poderia fazer a encomenda para gente, nós apenas não tínhamos o contato nas mãos. Com um projeto da disciplina de Laboratório de Engenharia de Software em 2016 para fazer, atacamos esta problemática, considerando o nicho de mercado que só fazia ampliar na cidade.',
		imglink: 'https://lh3.googleusercontent.com/ldzzVrzi4uGuhmIBUSLhnwzf95zuTsxROLX7pWbdKXoFj8rV2CLsQDZga9UfOrJWvJRJ3LbD_9G7_K6Vq9Fi7fPxK6pLCi5ZiovbPQoPGEusJfS72UEt263eTeGKcy10Rn_T-j_BT84xDGSSpKmwX-0VyHn5xSr6dYfXTg2gLviRSKWyCcOjYTmuGXngBk1lxN172j8wKs-97REqLEtUdVJwg50nZCQpOZMpBkHqL9sq-kaX9okW-thSZFCP__Gb4kmBs3AXFpWcS3LHKEKf8GhUniMSuqkaxSwxtCrslNA4lsqQiMpBXpHWUeCD-r7fkZvRkh6ml_IyqcFj8iilb0quxHbVwS1RC_fxHDAsOeLPeTPt6SOue-ugMoCZH-B2O8_9AMnypopir_uNRgafCKRAlkQTsoddI5ulFgu9GFeQaRH49FKKdyzpboJA9S3uhwW4WGwt_zgZFHpgEGMUudLof0OWISGP09JNvEZauffwvKeCKr92MwFl36W9JaknR-60DFLwGPlw1hFN8_8dzJxtHgIo03KCulFi_grz2ldkSUaXiFsfzKE3rPWjF_YHffV_lQ=w314-h208-no'
	},
	$scope.bnEnd = {
		message: 'Use agora!',
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
		bnstyle: {
			'background': 'url(https://lh3.googleusercontent.com/JwmDbAvjBq3HuiN70ubrUePjuqWaVEM2Wktt8se_W1G6WoROTWbpX4woDhxaIQI9mY15PfjinYC87W_hKDLYZ2_3hWbuoTpOv-czMV8zD-KHumr0NpildY8kTr3lZNo4nAlg-jBmm81PQy1eeYyQaxLLRpuuRNswEMrMa_YHv6TFifry-kQ4aWXweW7rkKT-lwKD2HsFGy5aoin8kJQFQvGbbmJS5GPQkdV5eShxhheOvcZ8CwV9lG4gBVfm8x8VN6eTnxV_LZgAJFc-pOsRmkCssqZSC1AVvm5fD0gtglh6-16ligWiP1WNR008fhiMPQSoKjEC420lKy5YdFlMVYVhyGNn4wBjYPoWNJuJet0eN9QSG3b2ldFQH6hQNV_X9U85oXF0GoEu8MQD1MvT4IXk5LUwf0b9Oq2BISko-tggiqmNwnOw7jQRQK-8l0zmCFP_5-I7jDoDFqRq_RVxGglwhLRHIZ4hn-M4RBZgqyev99apuwE-Y9vM94-dGcVh1rCQZ1pQdvLXZ9Hh76dn9LqlZiIf1Kk2uVl4jxAzMLzAhW1BlKiV5K2SVAalZDpBkaOjkw=w1002-h667-no) no-repeat center center',
			'padding': '100px 0',
			'color': '#f8f8f8',
			'background-size': 'cover'
		}
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