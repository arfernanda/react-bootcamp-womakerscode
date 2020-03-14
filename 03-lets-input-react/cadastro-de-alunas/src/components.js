import React, { Component } from 'react';

export class FormPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Cadastro de Alunas</h1>
			</div>
		);
	}
}

export class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			city: '',
			email: '',
			cpf: '',
			tel: ''
		};

		handleChange = (name, value);
	}
	render() {
		return <div />;
	}
}

//tentativas de fazer o formInput:
//
// export class FormInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<p>texto</p>
// 				<input type="text" placeholder="" />
// 			</div>
// 		);
// 	}
// }

// export const FormInput = (props) => {
// 	const form = props.form;
// 	return (
// 		<div>
// 			<p>texto</p>
// 			<input type="text" placeholder="" />
// 		</div>
// 	);
// };

//input do formulario
export const FormInput = ({ label, placeholder, inputType, value, handleChange, name }) => {
	//e = event
	const handleInputChange = (e) => {
		//pegar nome e valor do evento de target
		handleChange(e.target.name, e.target.value);
	};
	return (
		<div className="form-input-container">
			<label className="input">{label}</label>
			<input value={value} name={name} type={inputType} placeholder={placeholder} onChange={handleInputChange} />
		</div>
	);
};

//botao de submit
export class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<button>Inscrever</button>
			</div>
		);
	}
}
