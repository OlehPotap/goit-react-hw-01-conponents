
import PropTypes from "prop-types"
import FriendsListItem from "./FriendsListItem"
import s from './friends-list.module.css'

const FriendsList = ({friends}) => {
   const listElement = friends.map(el=>{
       const {avatar, name, isOnline, id} = el;
        return ( <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/> 
        )
     })
    return (
        <ul className={s.list}>
            {listElement}
</ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}

export default FriendsList;

