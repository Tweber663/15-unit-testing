import { render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';


  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();
    render(<CurrencyForm action={action} />);

    // find “convert” button
    const submitButton = screen.getByText('Convert');

    // simulate user click on "convert" button
    userEvent.click(submitButton);

    // check if action callback was called once
    expect(action).toHaveBeenCalledTimes(1);

  });



