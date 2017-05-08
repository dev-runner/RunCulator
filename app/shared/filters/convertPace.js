(function(){ 'use strict';

	angular.module('runculator.filters.convertPace', [])
		.filter('convertPace', convertPaceFilter);


	/**
	  * Converts from (mm:ss) to (mm'ss")
	  */
	function convertPaceFilter(){
		return function(pace, perKm){

			pace = pace || '';
			var output = '';

			var splitPace = pace.split(':');
			if(splitPace.length == 2){
				output += splitPace[0] + "'" + splitPace[1] + '"';
				if(perKm) output += ' /km';
			}
			else if(splitPace.length == 1 && !isNaN(parseInt(splitPace[0])) ){
				output += splitPace[0] + '"';
				if(perKm) output += ' /km';	
			} else {
				output = '-';
			}
			return output;
		};
	}


})();