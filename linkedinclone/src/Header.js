import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Cottage';
import NetworkIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Header.css";
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className="header">

      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""></img>
        <div className="header_search">
            <SearchIcon/>
            <input type="text"/>
        </div>

      </div>


      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={NetworkIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar='https://photos.google.com/photo/AF1QipMMbsfmGd3rmqwJJbNah27me7Zx3jgU9ny5PIVB' title='Me'/>


      </div>


    </div>
  )
}

export default Header