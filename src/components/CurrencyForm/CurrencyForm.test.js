import { render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';


  it('should run action callback with proper data on form submit', () => {

    const testCases = [
        { amount: '100', from: 'PLN', to: 'USD' },
        { amount: '20', from: 'USD', to: 'PLN' },
        { amount: '200', from: 'PLN', to: 'USD' },
        { amount: '345', from: 'USD', to: 'PLN' },
  ];
   for (const textObj of testCases) {
   
    const action = jest.fn();
    render(<CurrencyForm action={action} />);

    const amountField = screen.getByTestId('amount');
    const fromField = screen.getByTestId('from'); 
    const toField = screen.getByTestId('to');

    userEvent.type(amountField, textObj.amount);
    userEvent.selectOptions(fromField, textObj.from);
    userEvent.selectOptions(toField, textObj.to); 

    // find “convert” button
    const submitButton = screen.getByText('Convert');

    // simulate user click on "convert" button
    userEvent.click(submitButton);

    // check if action callback was called once
    expect(action).toHaveBeenCalledTimes(1);

    expect(action).toHaveBeenCalledWith(
        { amount: Number(textObj.amount), from: textObj.from, to: textObj.to}
    );

    // unmount component
        cleanup()

   }

  });



