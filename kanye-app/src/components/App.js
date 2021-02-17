import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [ kanyeQuote, setKanyeQuote ] = useState('');

	useEffect(() => {
		async function getQuote() {
			const res = await fetch("https://api.kanye.rest");
			const data = await res.json();
     
			setKanyeQuote(data.quote);
		}
		getQuote();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<p>{kanyeQuote}</p>
			</header>
		</div>
	);
}

export default App;
