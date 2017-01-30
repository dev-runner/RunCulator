(function(){ 'use strict';
	
	angular.module('runculator.bmi', []);

	angular.module('runculator.bmi')
		.controller('BmiController', ['bmiService','$timeout','$scope','$translate', BmiController]);

	function BmiController(bmiService, $timeout, $scope, $translate){

		this.weight = this.height = this.result = null;
		this.errorTranslations = {};
		this.calculated = false;
		var ctrl = this;

		$translate('GENERAL.FORM_ERROR').then(function(translation){
			ctrl.errorTranslations['error_form'] = translation;
		});

		this.processForm = function(){
			if(!this.weight || !this.height){
				$scope.setError('danger', this.errorTranslations['error_form']);
				return;
			}
			this.getResult();
		};

		this.getResult = function(){
			this.calculated = false;

			function fetchResult(){
				ctrl.result = bmiService.getResult(ctrl.weight, ctrl.height);
				ctrl.calculated = true;
			}
			$timeout(fetchResult, 300);
		};
		
	}

})();