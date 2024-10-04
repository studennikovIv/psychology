import styles from './friendList.module.css';
import FriendListItem from './FriendListItem.jsx';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => {
      return (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
