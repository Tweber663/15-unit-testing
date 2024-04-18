import ResultBox from "./ResultBox";
import { getByTestId, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from "@testing-library/react";


describe('Component ResultBox', () => {
    it('Should render without crashing', () => {
      render(<ResultBox from="PLN" to="USD" amount={100} />)  
    });


    // it('should render proper info about conversion when PLN -> USD”', () => {
    //     render(<ResultBox from="PLN" to="USD" amount={100.00} />);
    //     const resultBox = screen.getByTestId('output');
    //     expect(resultBox).toHaveTextContent('PLN 100.00 = $28.57');
    // }); 

    // it('should have proper info when converting PLN -> USD in many variants', () => {

    //     const testBench = [
    //         {amount: 123, expect: 35.14},
    //         {amount: 7, expect: 2},
    //         {amount: 49, expect: 14},
    //         {amount: 73, expect: 20.85}
    //     ]

    //     testBench.forEach((test) => {
    //         render(<ResultBox from="PLN" to="USD" amount={test.amount} />)  
    //         const output = screen.getByTestId('output');
    //         expect(output).toHaveTextContent(`PLN ${test.amount}.00 = $${Math.floor(test.expect)}`);
    //         cleanup();
    //     })
    // });

    it('USD -> PLN conversion should return correct value', () => {
        render(<ResultBox from="USD" to="PLN" amount={100}/>)

        const resultBox = screen.getByTestId('output');
        
        expect(resultBox).toHaveTextContent('$100.00 = PLN 350.00');
    });

    it('USD -> PLN conversion should return correct values in multiple tests', () => {

        const testBench = [
            {amount: 123, expect: 430.5},
            {amount: 7, expect: 24.5},
            {amount: 49, expect: 171.5},
            {amount: 73, expect: 255.5}
        ]

        testBench.forEach((test) => {
            render(<ResultBox from="USD" to="PLN" amount={test.amount}/>);

            const output = screen.getByTestId('output');

            expect(output).toHaveTextContent(`$${test.amount}.00 = PLN ${test.expect}`);

            cleanup();
        });
    });

    it('USD -> USD or PLN -> PLN should not convert and return the same value', () => {
        render(<ResultBox from="PLN" to="PLN" amount={100}/>);

        
    });

});