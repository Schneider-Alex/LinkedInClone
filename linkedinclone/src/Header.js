import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h2>This is the Header</h2>

      <div className="header_left">
        <img src="" alt=""></img>
        <div className="header_search">
            {/* SearchIcon*/}
            <input type="text"/>
        </div>

      </div>


      <div className="header_right">


      </div>


    </div>
  )
}

export default Header