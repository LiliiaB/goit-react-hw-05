import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <div className={css.cardFriends}>
        <img className={css.imgItem} src={avatar} alt={name} width="48" />
        <p className={css.nameFriends}>{name}</p>
        <p className={isOnline ? css.onlineStyle : css.offlineStyle}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
};

export default FriendListItem;
