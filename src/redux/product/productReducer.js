import { ADD, DECREASEQUANTITY } from './action';

const initialState = [
	{
		id: 1,
		image: 'https://i.dummyjson.com/data/products/98/thumbnail.jpg',
		name: 'Spring and Summer Shoes',
		category: 'Mens Shoe',
		price: 400,
		quantity: 5,
	},
];

const newId = (state) =>
	state.reduce((maxId, curr) => Math.max(maxId, curr.id), 1) + 1;

export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return [...state, { id: newId(state), ...action.payload.product }];

		case DECREASEQUANTITY:
			return [
				...state.filter((el) => el.id !== action.payload.id),
				{
					...state.find((el) => el.id === action.payload.id),
					quantity:
						state.find((el) => el.id === action.payload.id)
							.quantity - 1,
				},
			];

		default:
			return state;
	}
}
