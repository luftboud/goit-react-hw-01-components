import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'
const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
      {friends.map(f => (
        <FriendListItem
          name={f.name}
          key={f.id}
          isOnline={f.isOnline}
          avatar={f.avatar}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export { FriendList };
