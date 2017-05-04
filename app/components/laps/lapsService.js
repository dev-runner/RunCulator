(function(){ 'use strict';

	angular.module('runculator.laps.service', [])
		.factory('lapsService', LapsService);
		
	function LapsService(){

		var service = {
			getResult: getResult
		};

		return service;

		/////////////////////////		

		function getResult(data){

			var distance = data.distance || 0;
			var minutes = (data.pace && data.pace.minutes) || 0;
			var seconds = (data.pace && data.pace.seconds) || 0;
			
			var result = {
				hours: 0,
				minutes: 0,
				seconds: 0
			};

			// pace in seconds * distance in km
			var lapSeconds = (minutes*60 + seconds) * (distance/1000);

			result.hours = Math.floor(lapSeconds/3600);
			result.minutes = Math.floor((lapSeconds - result.hours*3600)/60);
			result.seconds = Math.round(100*(lapSeconds - result.hours*3600 - result.minutes*60))/100;

			return result;
		}

	}

})();