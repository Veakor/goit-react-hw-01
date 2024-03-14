
// eslint-disable-next-line no-unused-vars
import styles from './FriendListItem.module.css'; 

// eslint-disable-next-line react/prop-types
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.useradd}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.username}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;