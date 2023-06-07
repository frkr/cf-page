import { Fragment, useState } from 'react';

export default function Task() {
	const [teste, setTeste] = useState({ text: 'Teste' });

	function dothething() {
		fetch('/funciona', {
			method: 'POST',
		}).then((response) => {
			setTeste({ text: 'sdfgsdh' });

		}).catch((error) => {
			setTeste({ text: 'Não' });
		});
	}

	return (
		<Fragment>
			<ui>
				<li>
					<button onClick={dothething}>Funciona</button>
					{teste.text}
				</li>
			</ui>
		</Fragment>
	);

}
