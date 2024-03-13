/* eslint-disable react/jsx-no-undef */


// eslint-disable-next-line no-unused-vars
import styles from './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    
    <ul>
      {friends.map(({ id, ...props }) => (
        <li key={id}>
          <FriendListItem {...props} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;