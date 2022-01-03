import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial corlor', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveStyle('background-color: red');
    // Fire click event
    fireEvent.click(colorButton);
    // Assert that the button's background color has changed
    expect(colorButton).toHaveStyle('background-color: blue');
    // Assert that the button's text has changed
    expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
    render(<App />);
    // check that the button starts out enabled
    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
    // check that the checkbox starts out unchecked
    const check = screen.getByRole('checkbox');
    expect(check).not.toBeChecked();
});
