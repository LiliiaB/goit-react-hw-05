import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div className={css.card}>
        <div>
          <img className={css.imgProfile} src={image} alt={name} />
          <p className={css.name}>{name}</p>
          <p>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.list}>
          <li className={css.li}>
            <span>Followers</span>
            <span className={css.span}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.li}>Views</span>
            <span className={css.span}>{stats.views}</span>
          </li>
          <li>
            <span className={css.li}>Likes</span>
            <span className={css.span}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
