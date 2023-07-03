import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
  const data = items.map(el => (
    <tr key = {el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  ));
  return (
      <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export { TransactionHistory };