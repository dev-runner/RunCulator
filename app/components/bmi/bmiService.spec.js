'use strict';

describe("BmiService", function(){

	var bmiService;

	beforeEach(function(){
	
		// load service module
		module('runculator.bmi.service');

		inject(function($injector) {
			bmiService = $injector.get('bmiService');
		});

	});


	describe('getResult', function(){

		it('should not return any value if no input is given', function(){
			
			var data = {};
			var result = bmiService.getResult(data);

			expect(result.value).toBeNaN();
			expect(result.class).toBe('');
			expect(result.description).toBe('');
		});


		it('should return value for normal weight', function(){

			var data = { weight: 90, height: 190 };
			var result = bmiService.getResult(data);

			expect(result.value).toBe(24.93);
			expect(result.class).toBe('normal');
		});


		it('should return value for underweight', function(){

			var data = { weight: 66, height: 190 };
			var result = bmiService.getResult(data);

			expect(result.value).toBe(18.28);
			expect(result.class).toBe('below');
		});


		it('should return value for overweight', function(){

			var data = { weight: 91, height: 190 };
			var result = bmiService.getResult(data);

			expect(result.value).toBe(25.21);
			expect(result.class).toBe('above');
		});


		it('should return value for obese', function(){

			var data = { weight: 130, height: 190 };
			var result = bmiService.getResult(data);

			expect(result.value).toBe(36.01);
			expect(result.class).toBe('obese');
		});

		
	});


});