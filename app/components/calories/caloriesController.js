(function(){ 'use strict';

	angular.module('runculator.cal',[]);

	angular.module('runculator.cal')
		.controller('CaloriesController', ['calService','$timeout','$scope','$translate', CaloriesController]);
	
	function CaloriesController(calService, $timeout, $scope, $translate){

		this.distance = this.weight = this.result = null;
		this.time = {
			hours: null,
			minutes: null,
			seconds: null
		};
		this.errorTranslations = {};
		this.calculated = false;
		var ctrl = this;

		$translate('GENERAL.FORM_ERROR').then(function(translation){
			ctrl.errorTranslations['error_form'] = translation;
		});

		this.processForm = function(){
			if(!this.distance || !this.weight || !this.validateTime()){
				$scope.setError('danger', this.errorTranslations['error_form']);
				return;
			}
			this.getResult();
		};

		this.validateTime = function(){
			return (!this.time.hours && !this.time.minutes && !this.time.seconds) ? false : true;
		};

		// calculate calories burned
		this.getResult = function(){
			this.calculated = false;

			function fetchResult(){
				ctrl.result = calService.getResult(ctrl.distance, ctrl.weight, ctrl.time);
				ctrl.calculated = true;
			}
			$timeout(fetchResult, 300);
		};

	}

})();