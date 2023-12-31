import { useDispatch } from 'react-redux';
import {
	decrementQuantity,
	incrementQuantity,
	removeOneFromCart,
} from '../../redux/cart/actionCreators';

export default function CartItem({ product }) {
	// ! Required variables and hooks
	const dispatch = useDispatch();
	const { id, image, name, category, price, quantity } = product;

	const handleIncrementQuantity = () => {
		dispatch(incrementQuantity(id));
	};

	const handleDecrementQuantity = () => {
		dispatch(decrementQuantity(id));
	};

	const handleRemoveItemFromCart = () => {
		dispatch(removeOneFromCart(id));
	};

	return (
		<div className='cartCard'>
			<div className='flex items-center col-span-6 space-x-6'>
				{/* <!-- cart image --> */}
				<img className='lws-cartImage' src={image} alt='product' />
				{/* <!-- cart item info --> */}
				<div className='space-y-2'>
					<h4 className='lws-cartName'>{name}</h4>
					<p className='lws-cartCategory'>{category}</p>
					<p>
						BDT <span className='lws-cartPrice'>{price}</span>
					</p>
				</div>
			</div>
			<div className='flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0'>
				{/* <!-- amount buttons --> */}
				<div className='flex items-center space-x-4'>
					<button
						className='lws-incrementQuantity'
						onClick={handleIncrementQuantity}>
						<i className='text-lg fa-solid fa-plus'></i>
					</button>
					<span className='lws-cartQuantity'>{quantity}</span>
					<button
						className='lws-decrementQuantity'
						onClick={handleDecrementQuantity}>
						<i className='text-lg fa-solid fa-minus'></i>
					</button>
				</div>
				{/* <!-- price --> */}
				<p className='text-lg font-bold'>
					BDT{' '}
					<span className='lws-calculatedPrice'>
						{price * quantity}
					</span>
				</p>
			</div>
			{/* <!-- delete button --> */}
			<div className='flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0'>
				<button
					className='lws-removeFromCart'
					onClick={handleRemoveItemFromCart}>
					<i className='text-lg text-red-400 fa-solid fa-trash'></i>
				</button>
			</div>
		</div>
	);
}
