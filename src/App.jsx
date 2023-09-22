import { useState } from 'react';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import logo from './assets/logo.png';
import './App.css';

function App() {
	const [onHome, setOnHome] = useState(true);

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
						<a href='#home' className='navHome' id='lws-home'>
							{' '}
							Home{' '}
						</a>
						<button
							className='navCart'
							id='lws-cart'
							onClick={() => setOnHome(false)}>
							<i className='text-xl fa-sharp fa-solid fa-bag-shopping'></i>
							<span id='lws-totalCart'>0</span>
						</button>
					</div>
				</div>
			</nav>

			{onHome ? <Main /> : <Cart />}
		</div>
	);
}

export default App;
