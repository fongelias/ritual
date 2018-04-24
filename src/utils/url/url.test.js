import assert from 'assert';
import { url } from './url';


describe('url util object', () => {
	const testUrl = 'https://ritualmap.com?val1=1&val2=2';
	const getVars = {
		val1: 1,
		val2: 2,
	};

	describe('#getParameter()', () => {
		it('should return the correct value of a key', () => {
			const testKey = 'val1';
			assert(url.getParameter(testKey, testUrl) == getVars[testKey]);
		})

		it('should return undefined if there is no matching key', () => {
			const testKey = 'notAKey';
			assert(url.getParameter(testKey, testUrl) === undefined);
		})
		
	})

	describe('#getAllParameters()', () => {
		it('should return an object', () => {
			assert(typeof url.getAllParameters(testUrl) == 'object');
		})

		it('returned object should contain all key value pairs', () => {
			const parameterObject = url.getAllParameters(testUrl);
			assert(parameterObject.val1 == 1 && parameterObject.val2 == 2);
		})
	})
})






