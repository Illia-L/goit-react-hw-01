import FriendlistItem from '../../FriendlistItem/FriendlistItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li
          className={css.item}
          key={friend.id}
        >
          <FriendlistItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
