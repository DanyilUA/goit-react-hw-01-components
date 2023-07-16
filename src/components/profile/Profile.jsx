import css from './Profile.module.css';
import PropTypes from 'prop-types';


export const Profile = ({props}) => {
    const { username, tag, location, avatar, stats } = props;
    return (
      <div className={css.container}>
        <div className={css.profile}>
          <div className={css.description}>
            <img src={avatar} alt="User avater" className={css.avatar} />
            <p className={css.username}>{username}</p>
            <p className={css.text}>{tag}</p>
            <p className={css.text}>{location}</p>
          </div>

          <ul className={css.stats}>
            <li className={css.socialmedia}>
              <span className={css.label}>Followers</span>
              <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.socialmedia}>
              <span className={css.label}>Views</span>
              <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.socialmedia}>
              <span className={css.label}>Likes</span>
              <span className={css.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    );
}


Profile.propTypes = {

user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}),
};