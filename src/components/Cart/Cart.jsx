import { useSelector } from 'react-redux';
import BillDetails from './BillDetails';
import CartItem from './CartItem';

export default function Cart() {
	// ! Required variables and hooks
	const cart = useSelector((state) => state.cart);

	return (
		<main className='container 2xl:px-8 px-2 py-16 mx-auto'>
			<h2 className='mb-8 text-xl font-bold'>Shopping Cart</h2>
			<section className='cartListContainer'>
				<section className='space-y-6'>
					{/* <!-- Cart Item --> */}
					{cart.length ? (
						cart.map((cartItem) => (
							<CartItem key={cartItem.id} product={cartItem} />
						))
					) : (
						<p className='mt-10'>Have nothing to see here!</p>
					)}
				</section>

				{/* <!-- Bill Details --> */}
				<BillDetails />
			</section>
		</main>
	);
}
