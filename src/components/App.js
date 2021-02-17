import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [ kanyeQuote, setKanyeQuote ] = useState('');

	useEffect(()=>{
		getQuote();
	}, []);

	async function getQuote() {
			const res = await fetch(process.env.REACT_APP_KANYE_API_URL);
			const data = await res.json();
			console.log(data);

			setKanyeQuote(data.quote);
		}

	function handleClick() {
		getQuote();
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Living Your Kanye Best</h1>
				<img
					src='https://static.billboard.com/files/media/kanye-west-whh-2018-billboard-1548-compressed.jpg'
					alt='Kanye' className = "App-logo"
				/>
				<p>{kanyeQuote}</p>
				<button className= 'button' onClick = {handleClick}>Zen your way to Kanye's Wisdom</button>
			</header>
		</div>
	);
}

export default App;
