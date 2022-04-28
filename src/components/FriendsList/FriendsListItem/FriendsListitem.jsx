import PropTypes from "prop-types"
import s from './friends-list-item.module.css'

const FriendsListItem = ({avatar, name, isOnline})=>{
    return(
        <li className={s.item}>
  <span className={s.status} style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendsListItem;