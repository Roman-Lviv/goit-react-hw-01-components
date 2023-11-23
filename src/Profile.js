import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css'; // Підключення CSS-модулів або Styled Components

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>{`@${tag}`}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      {Object.entries(stats).map(([label, quantity]) => (
        <li key={label}>
          <span className={styles.label}>{label}</span>
          <span className={styles.quantity}>{quantity}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
