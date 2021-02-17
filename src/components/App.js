import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [ kanyeQuote, setKanyeQuote ] = useState('');

	useEffect(() => {
		async function getQuote() {
			const res = await fetch(process.env.REACT_APP_KANYE_API_URL);
			const data = await res.json();

			setKanyeQuote(data.quote);
		}
		getQuote();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Living Your Kanye Best</h1>
				<img
					src='https://static.billboard.com/files/media/kanye-west-whh-2018-billboard-1548-compressed.jpg'
					alt='Kanye'
				/>
				<p>{kanyeQuote}</p>
			</header>
		</div>
	);
}

export default App;
