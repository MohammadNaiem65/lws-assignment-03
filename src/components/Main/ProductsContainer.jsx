import { useSelector } from 'react-redux';
import Product from './Product';

export default function ProductsContainer() {
	// ! Required variables and hooks
	const products = useSelector((state) => state.products);

	return (
		<div className='productContainer' id='lws-productContainer'>
			{/* <!-- product item --> */}
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
}
