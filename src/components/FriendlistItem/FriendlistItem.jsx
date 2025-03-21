import clsx from 'clsx';
import css from './FriendListItem.module.css';

function FriendListItem({ friend }) {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={friend.avatar}
        alt='Avatar'
        width='48'
      />
      <p className={css.name}>{friend.name}</p>
      <p className={clsx(css.status, friend.isOnline && css.online)}>
        {friend.isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
