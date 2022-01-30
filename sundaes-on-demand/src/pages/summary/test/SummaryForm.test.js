import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm.jsx';
test('Initiates app', () => {
    render(<SummaryForm />);
    let checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
});

test('checking checkbox enables button', () => {
    render(<SummaryForm />);
    let checkbox = screen.getByTestId('checkbox');
    let button = screen.getByRole('button', {
        name: 'Submit',
    });
    expect(button).toBeDisabled();
    userEvent.click(checkbox);
    expect(button).toBeEnabled();
});

test('checking checkbox disables button', () => {
    render(<SummaryForm />);
    let checkbox = screen.getByTestId('checkbox');
    let button = screen.getByRole('button', {
        name: 'Submit',
    });
    expect(checkbox).toBeEnabled();
    userEvent.click(checkbox);
    expect(button).toBeEnabled();
    userEvent.click(checkbox);
    expect(button).toBeDisabled();
});
