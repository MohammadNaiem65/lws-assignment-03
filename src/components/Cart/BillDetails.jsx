import { useDispatch, useSelector } from 'react-redux';
import { removeAllFromCart } from '../../redux/cart/actionCreators';

export default function BillDetails() {
	// ! Required variables and hooks
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const subtotal = cart.reduce(
		(total, curr) => total + curr.quantity * curr.price,
		0
	);

	const handleOrderPlacement = () => {
		dispatch(removeAllFromCart());
		alert('Order placed successfully!');
	};

	return (
		<section>
			<div className='billDetailsCard'>
				<h4 className='mt-2 mb-8 text-xl font-bold text-center'>
					Bill Details
				</h4>
				<div className='space-y-4'>
					{/* <!-- sub total --> */}
					<div className='flex items-center justify-between'>
						<p>Sub Total</p>
						<p>
							BDT <span className='lws-subtotal'>{subtotal}</span>
						</p>
					</div>
					{/* <!-- Discount --> */}
					<div className='flex items-center justify-between'>
						<p>Discount</p>
						<p>
							BDT <span className='lws-discount'>0</span>
						</p>
					</div>
					{/* <!-- VAT --> */}
					<div className='flex items-center justify-between'>
						<p>VAT</p>
						<p>
							BDT <span className='vat'>0</span>
						</p>
					</div>
					{/* <!-- Total --> */}
					<div className='flex items-center justify-between pb-4'>
						<p className='font-bold'>TOTAL</p>
						<p className='font-bold'>
							BDT <span className='lws-total'>{subtotal}</span>
						</p>
					</div>
					<button
						className='placeOrderbtn'
						onClick={handleOrderPlacement}>
						place order
					</button>
				</div>
			</div>
		</section>
	);
}
