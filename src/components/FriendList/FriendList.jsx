/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */


import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

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