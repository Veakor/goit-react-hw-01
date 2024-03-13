/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import styles from './FriendList.css'; 
// eslint-disable-next-line no-unused-vars
import React from 'react';
import FriendListItem from './FriendList';

// eslint-disable-next-line react/prop-types
const FriendList = ({ friends }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
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