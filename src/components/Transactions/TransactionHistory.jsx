import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.valueHeader}>
          <th className={css.columnTable}>Type</th>
          <th className={css.columnTable}>Amount</th>
          <th className={css.columnTable}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.valueTable}>
            <td className={css.transactionValue}>{item.type}</td>
            <td className={css.transactionValue}>{item.amount}</td>
            <td className={css.transactionValue}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
