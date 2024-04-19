export const convertPLNToUSD = (PLN) => {
  if (typeof PLN === 'number' && PLN > 0 ) {
    const PLNtoUSD = PLN / 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

   const amount = formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ').split('');
   amount[0] += ' ';
   return amount.join('');
  } else if (typeof PLN === 'string') {
    return NaN
  } else if (typeof PLN !== 'number' && PLN !== undefined ) {
    return 'Error';
  } else if (typeof PLN === 'number' && PLN < 0) {
    return '$ 0.00';
  } else {
    return NaN
  }
}