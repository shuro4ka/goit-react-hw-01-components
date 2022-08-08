import PropTypes from 'prop-types';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
    return (
        <li className ="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" 
                src={avatar} 
                alt="User avatar" 
                width="48"
            />
            <p className="name">{name}</p>
        </li>
    )
};

FriendListItem.propType = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}