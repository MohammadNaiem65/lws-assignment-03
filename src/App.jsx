import { useState } from 'react';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import logo from './assets/logo.png';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
	// ! Required variables and hooks
	const [onHome, setOnHome] = useState(true);
	const cart = useSelector((state) => state.cart);
	const quantity = cart.reduce((maxId, curr) => maxId + curr.quantity, 0);

	return (
		<div>
			{/* //  <!-- Navbar --> */}
			<nav className='bg-[#171C2A] py-4'>
				<div className='navBar'>
					<button>
						<img
							src={logo}
							alt='LWS'
							className='max-w-[140px]'
							onClick={() => setOnHome(true)}
						/>
					</button>

					<div className='flex gap-4'>
						<button
							className='navHome'
							id='lws-home'
							onClick={() => setOnHome(true)}>
							Home
						</button>
						<button
							className='navCart'
							id='lws-cart'
							onClick={() => setOnHome(false)}>
							<i className='text-xl fa-sharp fa-solid fa-bag-shopping'></i>
							<span id='lws-totalCart'>{quantity}</span>
						</button>
					</div>
				</div>
			</nav>

			{/* Main Page */}
			{onHome ? <Main /> : <Cart />}
		</div>
	);
}

export default App;
