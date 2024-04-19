export const formatAmountInCurrency = (amount, currency) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

   const part = formatter.format(amount).replace(/\u00a0/g, ' ').split('');
   if (currency === 'USD') {
    part[0] += ' ';
    return part.join('');
   } else {
    return part
   }
};