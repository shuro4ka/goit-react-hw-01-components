import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${isOnline && css.isOnline}`}>{isOnline}</span>
            <img className={css.avatar} 
                src={avatar} 
                alt="User avatar" 
                width="50"
            />
            <p className={css.name}>{name}</p>
        </li>
    )
};

FriendListItem.propType = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}