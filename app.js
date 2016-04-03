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

homeApp.directive('contactA', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/contacta.html'
    };
});

homeApp.directive('contactB', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        templateUrl: 'directives/contactb.html'
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
		cellphoneimg: 'https://lh3.googleusercontent.com/-H1x27H2vbdw/VwGXNNlxwkI/AAAAAAAA1n8/1PErJWUelWMdUYQe73bVhbMF4if-zGyVwCCo/s800-Ic42/mockup4version.png',
		hdstyle: {
			'background': 'url(https://lh3.googleusercontent.com/-XQXu-vhNG7k/VwGXeIr_6uI/AAAAAAAA1oE/lANjuh4vQKoacS1oGuI0kVALLpohupr9wCCo/s800-Ic42/photo-1458175049065-aefb15b1b58b.jpg) no-repeat center center',
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
			'background': 'url(https://lh3.googleusercontent.com/-2U3nkzdZq_c/VwGXeHZ18uI/AAAAAAAA1oE/0v_PCl005yYXfclGpMQ6lPse0V-lYVt0QCCo/s800-Ic42/photo-1455732063391-5f50f4df1854.jpg) no-repeat center center',
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
		imglink: 'https://lh3.googleusercontent.com/-J8768KThPcM/VwGXXL4cVlI/AAAAAAAA1oE/b0kOb2Nsqho9olZa67W3BYUKtoQPYP4wACCo/s800-Ic42/Campina.png'
	};
	$scope.conB = {
		header: [ 'Nossa história' ],
		content: 'Em Campina Grande, já perdemos muitas festas, porque ao encomendar um bolo em cima da hora, nosso contato preferido está cheio. Depois que a festa passa é que descobríamos outro contato. Para a disciplina de Laboratório de Engenharia de Software em 2016, atacamos esta problemática do nicho de mercado que só amplia na cidade.',
		imglink: 'https://lh3.googleusercontent.com/-T3oLOGHcPmg/VwGXXHE-9iI/AAAAAAAA1oE/1yiBp-sG69cxE0UQdOI48CVHmylgCoYvwCCo/s800-Ic42/desperate.png'
	};
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
			'background': 'url(https://lh3.googleusercontent.com/-XQXu-vhNG7k/VwGXeIr_6uI/AAAAAAAA1oE/lANjuh4vQKoacS1oGuI0kVALLpohupr9wCCo/s800-Ic42/photo-1458175049065-aefb15b1b58b.jpg) no-repeat center center',
			'padding': '100px 0',
			'color': '#f8f8f8',
			'background-size': 'cover'
		}
	};
});

homeApp.controller('ServicesController', function($scope) {
    $scope.bnIni = {
		message: 'Serviços e Funcionalidades',
		bnstyle: {
			'background': 'url(https://lh3.googleusercontent.com/-edMBVZgIpzc/VwGXeLJVPsI/AAAAAAAA1oE/PMZTyUhlFs4UHl67QHTD5xsrcqg-_jNIQCCo/s800-Ic42/photo-1452167272028-ad1f1ecdb224.jpg) no-repeat center center',
			'padding': '100px 0',
			'color': '#f8f8f8',
			'background-size': 'cover'
		}
	};
	$scope.conA = {
		header: [ 'Anúncios dispostos', 'para todos' ],
		content: 'Não é necessário login para ver nosso anúncios. Eles estarão dispostos na tela, e ao clicar em qualquer um, os contatos aparecem.',
		imglink: 'https://lh3.googleusercontent.com/-Oibn4b-0to4/VwGeGOB6gkI/AAAAAAAA1oo/hPkuggECufMmKdFQYUXoaRE6rqx9ZY0BgCCo/s800-Ic42/ad.png'
	};
	$scope.conB = {
		header: [ 'Para clientes' ],
		content: 'Veja os contatos de vários confeiteiros, pesquisando por localidade e pela data em que você quer receber o bolo.',
		imglink: 'https://lh3.googleusercontent.com/-0YhkX5ja7hs/VwGg0Eie3SI/AAAAAAAA1pE/Z_jLDS2LCCobbfPFBRP65yBoNdmeK2stgCCo/s800-Ic42/client.png'
	};
	$scope.conC = {
		header: [ 'Para confeiteiros' ],
		content: 'Coloque seus contatos para falar com seus clientes, e monte uma página de perfil da maneira que quiser, para orientar seus clientes.',
		imglink: 'https://lh3.googleusercontent.com/-GBNF9GDjNPs/VwGhnxqrU_I/AAAAAAAA1pQ/Q7AGYfJaidg_SaWPomFhiS3H3acY6P2cACCo/s800-Ic42/confectioner.png'
	};
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
			'background': 'url(https://lh3.googleusercontent.com/-XQXu-vhNG7k/VwGXeIr_6uI/AAAAAAAA1oE/lANjuh4vQKoacS1oGuI0kVALLpohupr9wCCo/s800-Ic42/photo-1458175049065-aefb15b1b58b.jpg) no-repeat center center',
			'padding': '100px 0',
			'color': '#f8f8f8',
			'background-size': 'cover'
		}
	};
});

homeApp.controller('ContactController', function($scope) {
    $scope.bnIni = {
		message: 'Dúvida? Contate-nos.',
		bnstyle: {
			'background': 'url(https://lh3.googleusercontent.com/-2U3nkzdZq_c/VwGXeHZ18uI/AAAAAAAA1oE/0v_PCl005yYXfclGpMQ6lPse0V-lYVt0QCCo/s800-Ic42/photo-1455732063391-5f50f4df1854.jpg) no-repeat center center',
			'padding': '100px 0',
			'color': '#f8f8f8',
			'background-size': 'cover'
		}
	};
	$scope.parA = {
		title: 'Já já colocaremos mais informações',
		partA: 'Estamos implementando melhores funcionalidades, após essa etapa nos preocuparemos em documentar tudo para tirar qualquer dúvida que você cliente possa ter.',
		partB: 'Tudo o que podemos mostrar a vocês agora, são nossos contatos, e-mail, facebook, etc. Então qualquer dica, pergunta, pedido para trabalhar conosco, fale com a gente!'
	};
	$scope.contactA = {
		title: 'Nosso time',
		contacts: [
			{
				imglink: 'https://lh3.googleusercontent.com/-ojS0uhWdx5E/VwGokBjmJDI/AAAAAAAA1qI/s-I9g-OMLEketSTGVAq9fK0125bskO_ZgCCo/s800-Ic42/Smiling.JPG',
				name: 'Dênnis Dantas',
				social: [
					{ url: 'https://www.facebook.com/dennis.d.desousa',
					  icon: 'facebook-official'							}
				]
			},
			{
				imglink: 'https://lh3.googleusercontent.com/-sWVja82B--I/VwGpFuZRWQI/AAAAAAAA1qE/1mBV_rGp5G4S7a-oiGgFEylblTZgSL8pwCCo/s800-Ic42/30777734516_c1ef85b371b46a07bdf3_512.jpg',
				name: 'Aline Costa',
				social: [
					{ url: 'https://www.facebook.com/profile.php?id=100003611741254',
					  icon: 'facebook-official'							}
				]
			},
			{
				imglink: 'https://lh3.googleusercontent.com/-18xgUFPnnkA/VwGpSL3jwmI/AAAAAAAA1qo/67O4RKjrW48esleOSgGX5X7gVG9DJhc2ACCo/s800-Ic42/10645236_717274615015547_6619002538199926766_n.jpg',
				name: 'Gabriel Lemos',
				social: [
					{ url: 'https://www.facebook.com/gabriel.brito.7165331',
					  icon: 'facebook-official'							}
				]
			}
		]
	};
	$scope.contactB = {
		contacts: [
			{
				imglink: 'https://lh3.googleusercontent.com/-HTeH35-4aUc/VwGqMxsY42I/AAAAAAAA1qk/zKeFZBmPWbgHTBC_Ga7b4-QMHwU9bJTBQCCo/s800-Ic42/12105917_981031305294275_6677699381296513225_n.jpg',
				name: 'Andrew Feliphe',
				social: [
					{ url: 'https://www.facebook.com/andrewfeliphe.nobregawanderley',
					  icon: 'facebook-official'							}
				]
			},
			{
				imglink: 'https://lh3.googleusercontent.com/-uZo6WpzKwp0/VwGqM3KtHkI/AAAAAAAA1qk/56cffgB44BsBRWd80UaD5iakWRGfwnEigCCo/s800-Ic42/10344825_526105664189497_1371140819729209573_n.jpg',
				name: 'Jordan Ferreira',
				social: [
					{ url: 'https://www.facebook.com/jordan.ferreiranunes',
					  icon: 'facebook-official'							}
				]
				
			}
		]
	};
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
			'background': 'url(https://lh3.googleusercontent.com/-XQXu-vhNG7k/VwGXeIr_6uI/AAAAAAAA1oE/lANjuh4vQKoacS1oGuI0kVALLpohupr9wCCo/s800-Ic42/photo-1458175049065-aefb15b1b58b.jpg) no-repeat center center',
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
		.state('services', {
			url: "/",
			templateUrl: 'sections/services.html',
			controller: 'ServicesController'
		})
		.state('contact', {
			url: "/",
			templateUrl: 'sections/contact.html',
			controller: 'ContactController'
		})
}]);