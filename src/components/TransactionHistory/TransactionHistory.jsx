/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
import styles from './TransactionHistory.module.css'; 

const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.highlight}>Type</th>
            <th>Amount</th>
            <th className={styles.highlight}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
export default TransactionHistory;
