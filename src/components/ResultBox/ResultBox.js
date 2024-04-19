import PropTypes from 'prop-types';
import { convertUSDToPLN } from './../../utils/convertUSDToPLN';
import { convertPLNToUSD } from './../../utils/convertPLNToUSD';
import { formatAmountInCurrency } from './../../utils/formatAmountInCurrency';
import { useMemo } from 'react';
import styles from './ResultBox.module.scss';
import { convertNone } from '../../utils/convertNone';

const ResultBox = ({ from, to, amount }) => {
  const convertedAmount = useMemo(() => {
    if (from === 'USD' && to === 'PLN') {
        return convertUSDToPLN(amount);
    } else if (from === 'PLN' && to === 'USD') {
        return convertPLNToUSD(amount);
    } else if (from === 'PLN' && to === 'PLN' || from === 'USD' && to === 'USD') {
        return convertNone(from, amount);
    }
    return formatAmountInCurrency(amount, from);
  }, [from, to, amount]);

  const formattedAmount = useMemo(() => formatAmountInCurrency(amount, from), [amount, from]);
  return amount.toString().split('')[0] === '-'? 
  <div className={styles.result} data-testid="output" >
      {'Wrong value...'}
  </div>
    :
  <div className={styles.result} data-testid="output" >
      {formattedAmount} = {convertedAmount}
  </div>
};

ResultBox.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default ResultBox;