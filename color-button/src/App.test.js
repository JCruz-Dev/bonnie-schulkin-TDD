import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial corlor', () => {
    render(<App />);
    const colorButton = screen.getByRole('button');
    expect(colorButton).toHaveClass('action-button-red');
    // Fire click event
    fireEvent.click(colorButton);
    // Assert that the button's background color has changed
    expect(colorButton).toHaveClass('action-button-blue');
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

describe('spaces before camel-case capital letters', () => {
    test('Works for no inner capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });
    test('Works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });
    test('Works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe(
            'Medium Violet Red'
        );
    });
});
