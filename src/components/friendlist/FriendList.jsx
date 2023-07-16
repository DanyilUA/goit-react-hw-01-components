import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import { FriendListItem } from 'components/friendlistitem/FriendListItem';

export function FriendList({ friends }) {

    return (
      <ul className={css.listFriends}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};