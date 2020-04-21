import React from 'react';
import { PRODUCTS } from './mock';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<input type="text" placeholder="Search..." />
				<p>
					<input type="checkbox" />
					Only show products in stock
				</p>
			</form>
		);
	}
}


class ProductRow extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const name = PRODUCTS.name;
		const price = PRODUCTS.price;
		const product = PRODUCTS
		console.log("PRODUCTS", PRODUCTS)
		return (
			<tr>
				<td>{name}</td>
				<td>{price}</td>
				<td>{PRODUCTS}</td>
			</tr>
		);
	}
}


// const ProductRow = (props) => {
// 	const product = props.product;
// 	return (
// 		<tr>
// 			<td>{product.name}</td>
// 			<td>{product.price}</td>
// 		</tr>
// 	);
// };

const ProductCategoryRow = (props) => {
	const product = props.product;
	return (
		<tr>
			<th colSpan="2">{product.category}</th>
		</tr>
	);
};

class ProductTable extends React.Component {
	render() {
		const rows = [];
		const lastCategory = null;

		this.props.products.forEach((product) =>
			rows.push(<ProductRow product={product} />));
		return <table>{rows}</table>;
	}
}

export class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<SearchBar />
				{/* <ProductTable /> */}
				<ProductRow />
			</div>
		);
	}
}
