import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
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