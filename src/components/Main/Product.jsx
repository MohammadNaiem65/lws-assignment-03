import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/actionCreators';
import { decreaseQuantity } from '../../redux/product/actionCreators';

export default function Product({ product }) {
	// ! Required variables and hooks
	const dispatch = useDispatch();
	const { id, image, name, category, price, quantity } = product;

	const addProductToCart = () => {
		dispatch(addToCart(product));
		dispatch(decreaseQuantity(id));
	};

	return (
		<div className='lws-productCard h-fit'>
			<img
				className='lws-productImage w-80 h-64'
				src={image}
				alt='product'
			/>
			<div className='p-4 space-y-2'>
				<h4 className='lws-productName'>{name}</h4>
				<p className='lws-productCategory'>{category}</p>
				<div className='flex items-center justify-between pb-2'>
					<p className='productPrice'>
						BDT <span className='lws-price'>{price}</span>
					</p>
					<p className='productQuantity'>
						QTY <span className='lws-quantity'>{quantity}</span>
					</p>
				</div>
				<button
					className='lws-btnAddToCart disabled:bg-gray-400'
					disabled={quantity ? false : true}
					onClick={addProductToCart}>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
