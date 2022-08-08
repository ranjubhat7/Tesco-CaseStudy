import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import congfigureStore from '../src/Components/Store/store';
const store = congfigureStore();
import { BrowserRouter as Router } from 'react-router-dom';

import Login from '../src/Components/Login/Login';
describe.only('Button Component', () => {
	render(
		<Router>
			<Provider store={store}>
				<Login />
			</Provider>
		</Router>,
	);
	const button = screen.getByTestId('loginButton');

	// Test 1
	test('Button Rendering', () => {
		expect(button).toBeInTheDocument();
	});

	// Test 2
	test('Button Text', () => {
		expect(button).toHaveTextContent('Login');
	});

	it('Test the submit handler', () => {
		render(
			<Router>
				<Provider store={store}>
					<Login />
				</Provider>
			</Router>,
		);
		const emailFieldValue = 'harshit@gmail.com';
		const passwordFieldValue = 'password1';

		fireEvent.change(screen.getByLabelText(/Email/i), {
			target: { value: emailFieldValue },
		});
		fireEvent.change(screen.getByLabelText(/Password/i), {
			target: { value: passwordFieldValue },
		});

		fireEvent.submit(
			screen.getByRole('button', {
				name: /Login/i,
			}),
			{
				target: {
					email: {
						value: 'abc@gmail.com',
					},
					password: {
						value: 'password',
					},
				},
			},
		);

		// expect(onSubmit).toBeCalled();
	});
});
