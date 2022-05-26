import React from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {logout, selectUser} from "./features/counter/userSlice";
import {auth} from "./firebase";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Cottage';
import NetworkIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Header.css";
import HeaderOption from './HeaderOption';


function Header() {
  const user =useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp=()=>{
    dispatch(logout());
    auth.signOut();

  };
  return (
    <div className="header">

      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""></img>
        <div className="header_search">
            <SearchIcon/>
            <input placeholder="Search..." type="text"/>
        </div>

      </div>


      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={NetworkIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar={true} title='Me' onClick={logoutOfApp}/>


      </div>


    </div>
  )
}

export default Header