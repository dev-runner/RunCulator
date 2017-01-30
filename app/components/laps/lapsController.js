(function(){ 'use strict';

	angular.module('runculator.laps', []);

	angular.module('runculator.laps')
		.controller('LapsController', ['lapsService','$timeout','$scope','$translate', LapsController]);

	// Laps Controller
	function LapsController(lapsService, $timeout, $scope, $translate){

		this.result = this.distance = null;
		this.pace = {
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
			if(!this.distance || !this.validatePace()){
				$scope.setError('danger', this.errorTranslations['error_form']);
				return
			}
			this.getResult();
		};


		this.getResult = function(){
			this.calculated = false;

			function fetchResult(){
				ctrl.result = lapsService.getResult(ctrl.distance, ctrl.pace);
				ctrl.calculated = true;
			}
			$timeout(fetchResult, 300);
		};

		
		this.validatePace = function(){
			return (!this.pace.minutes && !this.pace.seconds) ? false : true;
		};

	}

})();