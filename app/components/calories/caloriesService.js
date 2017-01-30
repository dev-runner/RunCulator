(function(){ 'use strict';

	angular.module('runculator.cal')
		.factory('calService', [CalService]);

	function CalService(){

		var o = {};

		const RUNNING_CAL_FACTOR = 1.036; // [kcal/kg/km]

		o.getResult = function(distance, weight, time){

			var result = {
				total_calories_burned: null,
				calories_per_hour: null,
				calories_per_km: null,
			};
			var total_seconds = 0;

			distance = distance || 0;
			weight = weight || 0;
			
			time.hours = time.hours || 0;
			time.minutes = time.minutes || 0;
			time.seconds = time.seconds || 0;
			total_seconds = time.hours*3600 + time.minutes*60 + time.seconds;

			// total calories
			result.total_calories_burned = Math.round(RUNNING_CAL_FACTOR * distance * weight);
			
			// calories per hour
			result.calories_per_hour = Math.round(3600 * result.total_calories_burned / total_seconds);

			// calories per km
			result.calories_per_km = Math.round(result.total_calories_burned / distance);

			return result;
		};

		return o;
	}

})();