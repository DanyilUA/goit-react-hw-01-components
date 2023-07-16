import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem ({avatar, name, isOnline}) {
    return (
      <li className={css.item}>
        <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
        <div className={css.imgwrapper}>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.friendName}>{name}</p>
        </div>
      </li>
    );
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};