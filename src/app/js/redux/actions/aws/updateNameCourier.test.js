import assert from 'assert';

import { updateNameCourier } from './updateNameCourier';

describe('updateNameCourier()', () => {

	beforeAll(() => {
		global.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200, null, testResponseJson)));
	})

	it('should', () => {

	})
})





