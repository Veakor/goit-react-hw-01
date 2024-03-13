

import styles from './Profile.module.css'; 


// eslint-disable-next-line react/prop-types
const Profile = ({ name, tag, location, image, stats }) => {
  
  // eslint-disable-next-line react/prop-types
  const { followers, views, likes } = stats; 

  return (
    <div className={styles.profile}>
      <div>
        <img src={image} alt="User avatar" />
        <p className={styles.username}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;