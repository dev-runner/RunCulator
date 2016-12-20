'use strict';

angular.module('runculator', ['ui.bootstrap', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// specify application routes
	$stateProvider
		.state('home', {
			url: '/',
			template: '<h3>Strona startowa</h3>',
		})
		.state('bmi', {
			url: '/bmi',
			template: '<h3>kalkulator BMI</h3>',
		})
		.state('tempo', {
			url: '/tempo',
			template: '<h3>Kalkulator tempa</h3>'
		})
		.state('calories', {
			url: '/calories',
			template: '<h3>Kalkulator kalorii</h3>',
		});

	// default route
	$urlRouterProvider.otherwise('home');

}]);