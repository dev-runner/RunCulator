(function(){ 'use strict';

	angular.module('runculator.pace')
		.factory('paceService', [PaceService]);
	
	function PaceService(){

		var o = {};

		o.getResult = function(distance, time){

			distance = distance || 0;
			time.hours = time.hours || 0;
			time.minutes = time.minutes || 0;
			time.seconds = time.seconds || 0;

			var result = {
				pace: {
					minutes: null,
					seconds: null,
				},
				speed: null,
			};

			// calculate pace and speed
			var timeInSeconds = time.hours*3600 + time.minutes*60 + time.seconds;
			var paceSeconds = timeInSeconds / distance; // [s/km]
			var speed = 3600 * distance / timeInSeconds; // [km/h]
			
			result.pace.minutes = Math.floor(paceSeconds/60);
			result.pace.seconds = Math.round(paceSeconds % 60);
			result.speed = Math.round(speed*1000)/1000;

			return result;
		};
		return o;
	}
	
})();