import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendsList}>
            {friends.map(({ id, isOnline, avatar, name }) => {
                    return(
                        <FriendListItem 
                            key={id} 
                            isOnline={isOnline} 
                            avatar={avatar} 
                            name={name}
                        />
                    )
            })}
        </ul>
    ); 
};

FriendList.propType = {
    friends: PropTypes.array
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}