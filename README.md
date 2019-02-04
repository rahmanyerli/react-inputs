# Convert basic HTML elements to React-Components and continue coding with your familiar syntax.

> Note: This is not a component library, you can just think of it as an approach to keep your code cleaner.

**Standart Text Input**
```js
<input type="text" className="color-red" onChange={this.testFunction}/>
```

**Text Component**
```js
<Text class="color-red" onchange={this.testFunction}/>
```

- [/src/components/inputs/index.js](https://github.com/rahmanyerli/react-inputs/blob/master/src/components/inputs/index.js)


# Sample Components

Note: Components and props can be expanded according to your needs.

**Label**

```js
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
```

**Text**

```js
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
```

**Email**

```js
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
```

**Password**

```js
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
```

**Button**

```js
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
```

## Usage

```js
import React, { Component } from 'react';
import { Label, Text, Email, Password, Button } from "../inputs";

class SignUp extends Component {

	testFunction = (event) => {
		if (event.target.nodeName === "INPUT") {
			console.log(event.target.value);
		}
		if (event.target.nodeName === "BUTTON") {
			console.log(event.target.textContent);
		}
	}

	render() {
		return (
			<React.Fragment>
				<br />
				<h2>Sign Up</h2>
				<hr />
				<form>
					<Label for="username" class="color-dark">Username:</Label>
					<Text
						id="username"
						name="username"
						class="color-blue"
						placeholder="username..."
						onblur={this.testFunction} />

					<Label for="username" class="color-dark">Email:</Label>
					<Email
						id="email"
						name="email"
						class="color-green"
						placeholder="email..."
						onblur={this.testFunction} />

					<Label for="username" class="color-dark">Password:</Label>
					<Password
						id="password"
						name="password"
						class="color-red"
						placeholder="password..."
						onblur={this.testFunction} />
					<hr />
					<Button onclick={this.testFunction}>
						Sign Up
			</Button>
				</form>
			</React.Fragment>
		);
	}
}

export default SignUp;
```
