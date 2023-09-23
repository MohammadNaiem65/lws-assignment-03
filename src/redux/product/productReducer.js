import { ADD } from './action';

const initialState = [
	{
		img: 'https://i.dummyjson.com/data/products/98/thumbnail.jpg',
		name: 'Spring and Summer Shoes',
		category: 'Mens Shoe',
		price: 400,
		quantity: 10,
	},
];

export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return [...state, action.payload.product];

		default:
			return state;
	}
}
