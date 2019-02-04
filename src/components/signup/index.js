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
