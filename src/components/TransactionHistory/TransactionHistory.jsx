
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
              <td className = {styles.word}>{type}</td>
              <td className = {styles.word}>{amount}</td>
              <td className = {styles.word}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
export default TransactionHistory;
