(function(){ 'use strict';
	
	angular.module('runculator.pace',[]);

	angular.module('runculator.pace')
		.controller('PaceController', ['paceService','$timeout','$scope','$translate', PaceController]);

	// Pace Controller
	function PaceController(paceService, $timeout, $scope, $translate){

		this.result = this.distance = null;
		this.time = {
			hours: null,
			minutes: null,
			seconds: null
		};
		this.selectedDistance = '';
		this.errorTranslations = {};
		this.calculated = false;
		var ctrl = this;

		$translate('GENERAL.FORM_ERROR').then(function(translation){
			ctrl.errorTranslations['error_form'] = translation;
		});
		
		this.processForm = function(){
			if(!this.distance || !this.validateTime()){
				$scope.setError('danger', this.errorTranslations['error_form']);
				return;
			}
			this.getResult();
		};

		// update distance when selected from list
		this.changeDistance = function(){
			this.distance = parseFloat(this.selectedDistance);
		};

		// reset selected distance when user updates manually
		this.resetDistance = function(){
			this.selectedDistance = '';
		};

		// at least one of the three must be non-empty	
		this.validateTime = function(){
			return (!this.time.hours && !this.time.minutes && !this.time.seconds) ? false : true;
		};

		// gets the result using the service
		this.getResult = function(){
			this.calculated = false;

			function fetchResult(){
				ctrl.result = paceService.getResult(ctrl.distance, ctrl.time);
				ctrl.calculated = true;
			}
			$timeout(fetchResult, 300);
		};

	}

})();