(function(){ 'use strict';

	// declate a module and dependencies
	angular.module('runculator.bmi.service', [
		'pascalprecht.translate'
	]);

	// register service on the module
	angular.module('runculator.bmi.service')
		.factory('bmiService', BmiService);
	
	BmiService.$inject = ['$translate'];

	function BmiService($translate){

		var service = {
			getResult: getResult
		};

		return service;

		//////////////////////////
		
		function getResult(data) {

			var result = {};
			var weight = data.weight || 0;
			var height = data.height || 0;

			result.value = Math.round(weight / (height * height / 10000) * 100) / 100;
			result.class = '';
			result.description = '';

			if(result.value >= 18.5 && result.value < 25){
				result.class = 'normal';

				$translate('BMI.DESCRIPTION_NORMAL').then(function(desc) {
					result.description = desc;
				}, function (translationId) {
					result.description = translationId;
				});

			}
			else if(result.value < 18.5){
				result.class = 'below';

				$translate('BMI.DESCRIPTION_BELOW').then(function(desc) {
					result.description = desc;
				}, function (translationId) {
					result.description = translationId;
				});

			}
			else if(result.value >=25 && result.value < 30){
				result.class = 'above';

				$translate('BMI.DESCRIPTION_ABOVE').then(function(desc) {
					result.description = desc;
				}, function (translationId) {
					result.description = translationId;
				});
			}
			else if(result.value >= 30){
				result.class = 'obese';

				$translate('BMI.DESCRIPTION_OBESE').then(function(desc) {
					result.description = desc;
				}, function (translationId) {
					result.description = translationId;
				});

			}
			return result;
		}


	}

})();