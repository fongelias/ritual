import assert from 'assert';
import { ACTION_TYPES } from '../actionTypes.js'

//Mocked Objects
import { UserController } from '../../../aws/UserController';
jest.mock('../../../aws/UserController', () => {
	return {
		UserController: {
			isAuthenticated: () => {
				return new Promise((resolve, reject) => {
					resolve(true);
				});
			},
		},
	}
});

//Tested Component
import { updateIsAuthorizedCourier } from './updateIsAuthorizedCourier';



describe('updateIsAuthorizedCourier()', () => {
	
	it('should call UserController.isAuthenticated() for state value', () => {

	})

	it('should call the dispatcher with the expected action', () => {
		const expectedAction = {
			type: ACTION_TYPES.UPDATE_ISAUTHORIZED,
			isAuthorized: true,
		}
		function dispatcher(action) { return action; };

		updateIsAuthorizedCourier(true, dispatcher).then((action) => {
			assert.deepEquals(expectedAction, action);
		});	
	})
})