import { ADD, REMOVEALL, REMOVEONE } from './action';

const initialState = [];

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD: {
			const isPresent = state.find(
				(el) => el.id === action.payload.product.id
			);

			if (isPresent) {
				return [
					...state.filter(
						(el) => el.id !== action.payload.product.id
					),
					{
						...action.payload.product,
						quantity: action.payload.product.quantity + 1,
					},
				];
			} else {
				return [
					...state,
					{
						...action.payload.product,
						quantity: 1,
					},
				];
			}
		}

		case REMOVEONE:
			return [
				...state.filter((el) => el.id !== action.payload.product.id),
			];

		case REMOVEALL:
			return [];

		default:
			return state;
	}
}
