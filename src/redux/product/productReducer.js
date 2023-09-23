import { ADD } from './action';

const initialState = [
	{
		id: 1,
		img: 'https://i.dummyjson.com/data/products/98/thumbnail.jpg',
		name: 'Spring and Summer Shoes',
		category: 'Mens Shoe',
		price: 400,
		quantity: 11,
	},
];

const newId = (state) =>
	state.reduce((maxId, curr) => Math.max(maxId, curr.id), 1) + 1;

export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return [...state, { id: newId(state), ...action.payload.product }];

		default:
			return state;
	}
}
