import { ADD, REMOVEALL, REMOVEONE } from './action';

export const addToCart = (product) => {
	return {
		type: ADD,
		payload: {
			product,
		},
	};
};

export const removeOneFromCart = (id) => {
	return {
		type: REMOVEONE,
		payload: {
			id,
		},
	};
};

export const removeAllFromCart = () => {
	return {
		type: REMOVEALL,
	};
};
