'use strict';

describe('paceService', function(){

	var paceService;

	beforeEach(function(){

		module('runculator.pace.service');

		inject(function($injector){

			paceService = $injector.get('paceService');

		});

	});


	describe('getResult', function(){

		it('should not return value for incorrect input', function(){

			var data = {};
			var result = paceService.getResult(data);

			expect(result.pace.minutes).toBeNaN();
			expect(result.pace.seconds).toBeNaN();
			expect(result.speed).toBeNaN();

		});


		it('should return value if correct input is given', function(){

			var data = {
				distance: 10,
				time: {
					hours: 1,
					minutes: 0,
					seconds: 0,
				}
			};
			var result = paceService.getResult(data);

			expect(result.pace.minutes).toBe(6);
			expect(result.pace.seconds).toBe(0)
			expect(result.speed).toBe(10);

		});

	});


});