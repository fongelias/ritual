import { ACTION_TYPES } from '../actionTypes';
import { UserController } from '../../../aws';

const updateIsAuthorized = (isAuthorized) => ({
	type: ACTION_TYPES.UPDATE_ISAUTHORIZED,
	isAuthorized,
})


export const updateIsAuthorizedCourier = (dispatcher) => {
	return UserController.isAuthenticated().then(isAuthorized => {
		return dispatcher(updateIsAuthorized(isAuthorized));
	});
}


