import { ADD } from './action';

export const addProduct = (product) => {
	return {
		type: ADD,
		payload: {
			product,
		},
	};
};
