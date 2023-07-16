import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export function Transaction({ items }) {
  return (
      <table className={css.history}>
        <thead>
          <tr className={css.containerheader}>
            <th className={css.header}>Type</th>
            <th className={css.header}>Amount</th>
            <th className={css.header}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.containertrasation}>
          {items.map(item => (
            <tr key={item.id} className={css.transactionlist}>
              <td className={css.item}>{item.type}</td>
              <td className={css.item}>{item.amount}</td>
              <td className={css.item}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};