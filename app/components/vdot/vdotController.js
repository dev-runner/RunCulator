(function(){ 'use strict';

	angular.module('runculator.vdot',[]);

	angular.module('runculator.vdot').controller('VdotController', ['vdotService','$timeout','$scope','$translate', VdotController]);

	function VdotController(vdotService, $timeout, $scope, $translate){

		this.result = null;
		this.calculated = false;
		this.selectedDistance = '';
		this.time = { hours: null, minutes: null, seconds: null };
		this.collapsed = { easy: true, marathon: true, threshold: true, intervals: true, repetitions: true };
		this.errorTranslations = {};

		var ctrl = this;

		$translate(['GENERAL.FORM_ERROR','VDOT.ERROR_BELOW']).then(function(translations){
			ctrl.errorTranslations['error_form'] = translations['GENERAL.FORM_ERROR'];
			ctrl.errorTranslations['error_below'] = translations['VDOT.ERROR_BELOW'];
		});


		// form processing
		this.processForm = function(){
			if(!this.selectedDistance || !this.validateTime()){
				$scope.setError('danger', this.errorTranslations['error_form']);
				return;
			}
			this.getResult();
		};

		// get vdot result
		this.getResult = function(){
			this.calculated = false;

			function fetchResult(){
				ctrl.result = vdotService.getResult(ctrl.selectedDistance, ctrl.time);
				ctrl.calculated = true;

				// vdot not found
				if(!ctrl.result && ctrl.calculated){
					$scope.setError('danger', ctrl.errorTranslations['error_below']);
				}
			}
			$timeout(fetchResult, 300);
		};

		// returns pace based on distance(km) and time(s)
		this.getPace = function(distance, timeInSeconds){
			return vdotService.getPaceInSeconds(distance, timeInSeconds);
		};

		// checks if time is provided by the user
		this.validateTime = function(){
			return (!this.time.hours && !this.time.minutes && !this.time.seconds) ? false : true;
		};

	}

})();