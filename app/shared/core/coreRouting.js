(function(){ 'use strict';

	angular.module('templates-dist', []);

	angular.module('runculator.core.routing', ['ui.router','templates-dist']);

	angular.module('runculator.core.routing').config(configureRoutes);

	configureRoutes.$inject = ['$stateProvider','$urlRouterProvider'];

	function configureRoutes($stateProvider, $urlRouterProvider){

		// define app states
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/components/home/homeView.html'
			})
			.state('bmi', {
				url: '/bmi-calculator',
				templateUrl: 'app/components/bmi/bmiView.html',
				controller: 'BmiController',
				controllerAs: 'bmi',
				data: {
					pageTitle: {
						pl: 'Kalkulator BMI',
						en: 'BMI Calculator'
					}
				}
			})
			.state('pace', {
				url: '/pace-calculator',
				templateUrl: 'app/components/pace/paceView.html',
				controller: 'PaceController',
				controllerAs: 'pace',
				data: {
					pageTitle: {
						pl: 'Kalkulator tempa biegu',
						en: 'Running pace calculator'
					}
				}
			})
			.state('calories', {
				url: '/calories-calculator',
				templateUrl: 'app/components/calories/caloriesView.html',
				controller: 'CaloriesController',
				controllerAs: 'cal',
				data: {
					pageTitle: {
						pl: 'Kalkulator kalorii',
						en: 'Calorie calculator'
					}
				}
			})
			.state('laps', {
				url: '/laps-calculator',
				templateUrl: 'app/components/laps/lapsView.html',
				controller: 'LapsController',
				controllerAs: 'laps',
				data: {
					pageTitle: {
						pl: 'Kalkulator czasu odcinka',
						en: 'Lap time calculator'
					}
				}
			})
			.state('vdot', {
				url: '/vdot-calculator',
				templateUrl: 'app/components/vdot/vdotView.html',
				controller: 'VdotController',
				controllerAs: 'vdot',
				data: {
					pageTitle: {
						pl: 'Kalkulator VDOT',
						en: 'VDOT calculator'
					}
				}
			});

		// default route
		$urlRouterProvider.otherwise('/');
		
	}



})();