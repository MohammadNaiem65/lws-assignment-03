import { ADD, DECREMENTQUANTITY, INCREMENTQUANTITY, REMOVEALL, REMOVEONE } from './action';

export const addToCart = (product) => {
	return {
		type: ADD,
		payload: {
			product,
		},
	};
};

export const incrementQuantity = (id) => {
	return {
		type: INCREMENTQUANTITY,
		payload: {
			id,
		},
	};
};

export const decrementQuantity = (id) => {
	return {
		type: DECREMENTQUANTITY,
		payload: {
			id
		}
	}
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
