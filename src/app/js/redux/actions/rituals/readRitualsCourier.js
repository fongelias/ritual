import { ACTION_TYPES } from '../actionTypes';

const readRituals = (rituals) => {
	return {
		type: ACTION_TYPES.READ_RITUALS,
		rituals,
	};
}

export const readRitualsCourier = (dispatcher) => {
	
}