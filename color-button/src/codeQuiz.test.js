import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('checkbox functionality', () => {
    render(<App />);
    const button = screen.getByRole('button');
    const check = screen.getByRole('checkbox');
    fireEvent.click(check);
    // expect button is disabled
    expect(button).toBeDisabled();
    // fire click event
    fireEvent.click(check);
    // expect button is enabled
    expect(button).toBeEnabled();
});

test('check button has background disabled', () => {
    render(<App />);
    const button = screen.getByRole('button');
    const check = screen.getByRole('checkbox');
    fireEvent.click(check);
    // expect button is disabled
    expect(button).toHaveClass('action-button-disabled');
});
