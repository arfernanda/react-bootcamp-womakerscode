import React from 'react';
import { PRODUCTS } from './mock';

/*export const PRODUCTS = [
	{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	{ category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	{ category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	{ category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	{ category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];*/

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Search..." />
				<p>
					<input type="checkbox" />
					Somente produtos em estoque
				</p>
			</div>
		);
	}
}

/*
export class ProductRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>name price</p>
			</div>
		);
	}
}
*/

const ProductRow = (props) => {
	const product = props.product;
	return (
		<tr>
			<td>{product.name}</td>
			<td>{product.price}</td>
		</tr>
	);
};

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

		this.props.products.forEach((product) => rows.push(<ProductRow product={product} />));
		return <table>{rows}</table>;
	}
}
