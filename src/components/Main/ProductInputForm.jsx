import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/product/actionCreators';

export default function ProductInputForm() {
	// ! Required variables and hooks
	const dispatch = useDispatch();

	const handleAddProducts = (e) => {
		e.preventDefault();
		const form = e.target;

		const name = form.name.value;
		const category = form.category.value;
		const image = form.image.value;
		const price = parseInt(form.price.value);
		const quantity = parseInt(form.quantity.value);

		const productDetails = { name, category, image, price, quantity };

		dispatch(addProduct(productDetails));
		form.reset();
	};
	
	return (
		<div className='formContainer'>
			<h4 className='formTitle'>Add New Product</h4>
			<form
				className='space-y-4 text-[#534F4F]'
				id='lws-addProductForm'
				onSubmit={handleAddProducts}>
				{/* <!-- product name --> */}
				<div className='space-y-2'>
					<label htmlFor='lws-inputName'>Product Name</label>
					<input
						className='addProductInput'
						id='lws-inputName'
						name='name'
						type='text'
						required
					/>
				</div>
				{/* <!-- product category --> */}
				<div className='space-y-2'>
					<label htmlFor='lws-inputCategory'>Category</label>
					<input
						className='addProductInput'
						id='lws-inputCategory'
						name='category'
						type='text'
						required
					/>
				</div>
				{/* <!-- product image url --> */}
				<div className='space-y-2'>
					<label htmlFor='lws-inputImage'>Image Url</label>
					<input
						className='addProductInput'
						id='lws-inputImage'
						name='image'
						type='text'
						required
					/>
				</div>
				{/* <!-- price & quantity container --> */}
				<div className='grid grid-cols-2 gap-8 pb-4'>
					{/* <!-- price --> */}
					<div className='space-y-2'>
						<label htmlFor='ws-inputPrice'>Price</label>
						<input
							className='addProductInput'
							type='number'
							name='price'
							id='lws-inputPrice'
							required
						/>
					</div>
					{/* <!-- quantity --> */}
					<div className='space-y-2'>
						<label htmlFor='lws-inputQuantity'>Quantity</label>
						<input
							className='addProductInput'
							type='number'
							name='quantity'
							id='lws-inputQuantity'
							required
						/>
					</div>
				</div>
				{/* <!-- submit button --> */}
				<button
					type='submit'
					id='lws-inputSubmit'
					className='submit text-gray-900 border-gray-900 border-2 hover:text-white'>
					Add Product
				</button>
			</form>
		</div>
	);
}
