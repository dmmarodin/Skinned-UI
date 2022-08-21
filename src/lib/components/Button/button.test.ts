import '@testing-library/jest-dom';

import { render, cleanup, fireEvent, screen } from '@testing-library/svelte';
import { tick } from 'svelte';
import { vi } from 'vitest';

// @ts-ignore
import Button from './Button.svelte';
// @ts-ignore
import Wrapper from './test-wrapper.svelte';

afterEach(() => {
	cleanup();
});

test('Shows button in document', () => {
	const { getByTestId } = render(Button, { 'data-testid': 'wrapper' });
	const button = getByTestId('wrapper');
	expect(button).toBeInTheDocument();
});

test('Shows button text', () => {
	const { getByTestId } = render(Wrapper, { title: 'ABC', 'data-testid': 'wrapper' });
	const button = getByTestId('wrapper');
	expect(button).toHaveTextContent('ABC');
});

test('Triggers button on click action', async () => {
	const mock = vi.fn();
	const { getByTestId } = render(Wrapper, {
		'data-testid': 'wrapper',
		onclick: mock
	});
	const button = getByTestId('wrapper');
	await fireEvent.click(button);
	await tick();

	expect(mock.mock.calls.length).toEqual(1);
});

// Note: This is as an async test as we are using `fireEvent`
// test('changes button text on click', async () => {
// 	render(Comp, { name: 'World' });
// 	const button = screen.getByRole('button');

// 	// Using await when firing events is unique to the svelte testing library because
// 	// we have to wait for the next `tick` so that Svelte flushes all pending state changes.
// 	await fireEvent.click(button);

// 	expect(button).toHaveTextContent('Button Clicked');
// });
