import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PRODUCTS } from './mock';
import { FilterableProductTable } from './components';

function App() {
	return (
		<div>
			<FilterableProductTable />
		</div>
	);
}

export default App;
