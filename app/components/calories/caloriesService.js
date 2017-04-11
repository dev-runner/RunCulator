(function(){ 'use strict';

	angular
		.module('runculator.cal')
		.factory('calService', CalService);

	CalService.$inject = [];

	function CalService(){

		const RUNNING_CAL_FACTOR = 1.036; // [kcal/kg/km]

		var service = {
			getResult: getResult
		};

		return service;

		/////////////////////////

		function getResult(data){

			var result = {
				total_calories_burned: null,
				calories_per_hour: null,
				calories_per_km: null,
			};
			var total_seconds = 0;

			var distance = data.distance || 0;
			var weight = data.weight || 0;
			var hours = data.time.hours || 0;
			var minutes = data.time.minutes || 0;
			var seconds = data.time.seconds || 0;
			
			total_seconds = (hours * 3600) + (minutes * 60) + seconds;

			// total calories
			result.total_calories_burned = Math.round(RUNNING_CAL_FACTOR * distance * weight);
			
			// calories per hour
			result.calories_per_hour = Math.round(3600 * result.total_calories_burned / total_seconds);

			// calories per km
			result.calories_per_km = Math.round(result.total_calories_burned / distance);

			return result;
		}
		
	}

})();