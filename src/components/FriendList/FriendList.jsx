


import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    
    <ul className ={styles.ulList}>
      {friends.map(({ id, ...props }) => (
        <li className ={styles.liStyle} key={id}>
          <FriendListItem {...props} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;