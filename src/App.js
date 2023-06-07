import './App.css';
import Task from './task';
import { Suspense } from 'react';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Suspense fallback={<div>Loading...</div>}>
					<Task />
				</Suspense>
			</header>
		</div>
	);
}

export default App;
