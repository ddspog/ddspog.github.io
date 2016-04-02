// Angular JS and Needed Libraries
$.getScript( "//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js" );
$.getScript( "//angular-ui.github.io/ui-router/release/angular-ui-router.js" );
$.getScript( "//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-sanitize.js" );
// Bootstrap JS
$.getScript( "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" );

// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('HomepageApp', ['ui.router', 'ngSanitize']);

homeApp.directive('navBar', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        template: '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span>
							<span class="icon-bar"></span><span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" ui-href="{{item.brand.text}}"><span ng-bind="item.brand.text"></span></a>
					</div>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav navbar-right">
							<li ng-repeat="btn in item.btns">
								<a ui-href="{{btn.url}}" ng-bind="btn.text"></a>
							</li>
						</ul>
					</div>
				</div>
				<!-- /.container -->
			</nav>'
    };
});

homeApp.directive('footBar', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        template: '
			<footer>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<ul class="list-inline">
								<li ng-repeat="btn in item.btns">
									<a ui-href="{{btn.url}}" ng-bind="btn.text"></a>
								</li>
							</ul>
							<p ng-repeat="element in item.credits" class="copyright text-muted small" ng-bind-html="element"></p>
						</div>
					</div>
				</div>
			</footer>'
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
    $scope.headerText = {};
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
            template: ''
        })
}]);