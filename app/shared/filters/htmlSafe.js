(function(){ 'use strict';

	angular.module('runculator.filters.htmlSafe', [])
		.filter("htmlSafe", htmlSafeFilter);

	htmlSafeFilter.$inject = ['$sce'];

	/**
	  * Trusted html filter
	  */
	function htmlSafeFilter($sce) {

	    return function(htmlCode){
			return $sce.trustAsHtml(htmlCode);
	    };
	    
	}


})();