

import styles from './Profile.module.css'; 

const Profile = ({ name, tag, location, image, stats }) => {
  
  const { followers, views, likes } = stats; 

  return (
    <div className={styles.profile}>
      <div className={styles.divProfile}>
        <img src={image} alt="User avatar" />
        <p className={styles.username}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.column}>
        <li className={styles.liStyle}>
          <span className={styles.bold}>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.liStyle}>
          <span  className={styles.bold}>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.liStyle}>
          <span className={styles.bold}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;