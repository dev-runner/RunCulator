(function(){ 'use strict';

	angular.module('runculator.filters.paceFormat', [])
		.filter('paceFormat', paceFormatFilter);


	/**
	  * Converts pace from seconds to (mm'ss") /km
	  */
	function paceFormatFilter(){
		
		return function(paceInSeconds){
			paceInSeconds = paceInSeconds || 0;
			var output = '';
			var minutes = Math.floor(paceInSeconds/60);
			var seconds = Math.round(paceInSeconds-60*minutes);

			output += minutes.toString() + "'" + seconds.toString() + '" /km';
			return output;
		};

	}


})();