import { ADD, REMOVEALL, REMOVEONE } from './action';

const initialState = [];

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD: {
			const isPresent = state.find(
				(el) =>
					JSON.stringify(el) ===
					JSON.stringify(action.payload.product)
			);

			if (isPresent) {
				return [
					...state.filter(
						(el) =>
							JSON.stringify(el) !==
							JSON.stringify(action.payload.product)
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
				...state.filter(
					(el) =>
						JSON.stringify(el) !==
						JSON.stringify(action.payload.product)
				),
			];

		case REMOVEALL:
			return [];

		default:
			return state;
	}
}
