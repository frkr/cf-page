import Task from './task';
import { Suspense } from 'react';

export default function App() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Task />
			</Suspense>
		</div>
	);
}
