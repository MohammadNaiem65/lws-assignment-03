import ProductInputForm from './ProductInputForm';
import ProductsContainer from './ProductsContainer';

export default function Main() {
	return (
		<main className='productWrapper py-16'>
			{/* <!-- products container --> */}
			<ProductsContainer />

			{/* <!-- Product Input Form --> */}
			<ProductInputForm />
		</main>
	);
}
