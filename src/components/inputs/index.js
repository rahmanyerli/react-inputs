import React, { Component } from "react";

class Label extends Component {
	render() {
		return (
			<label htmlFor={this.props.for}
				id={this.props.id}
				className={this.props.class}
			// you can add the attributes or events you need here...
			>
				{this.props.children}
			</label>
		);
	}
}

class Text extends Component {
	render() {
		return (
			<input type="text"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				onChange={this.props.onchange}
				onBlur={this.props.onblur}
			// you can add the attributes or events you need here...
			/>
		);
	}
}

class Email extends Component {
	render() {
		return (
			<input type="email"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				onChange={this.props.onchange}
				onBlur={this.props.onblur}
			// you can add the attributes or events you need here...
			/>
		);
	}
}

class Password extends Component {
	render() {
		return (
			<input type="password"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				onChange={this.props.onchange}
				onFocus={this.props.onfocus}
				onBlur={this.props.onblur}
			// you can add the attributes or events you need here...
			/>
		);
	}
}

class Button extends Component {
	render() {
		return (
			<button type="button"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				onClick={this.props.onclick}
			// you can add the attributes or events you need here...
			>
				{this.props.children}
			</button>
		);
	}
}

export { Label, Text, Email, Password, Button };