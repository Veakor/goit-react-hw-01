/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
import styles from './TransactionHistory.module.css'; 

const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.transactionHistory}> {/* Додаємо клас стилів */}
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => ( {/* Мапимо масив об'єктів */}
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  
export default TransactionHistory;
