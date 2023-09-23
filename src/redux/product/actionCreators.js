import { ADD, DECREASEQUANTITY } from './action';

export const addProduct = (product) => {
	return {
		type: ADD,
		payload: {
			product,
		},
	};
};

export const decreaseQuantity = (id) => {
	return {
		type: DECREASEQUANTITY,
		payload: {
			id,	
		},
	};
};
