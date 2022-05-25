import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";


function Sidebar() {

    const recentItem= (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="/background.jpeg" alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>Alex Schneider</h2>
                <h4>alexmanuelschneider@gmail.com</h4>
            </div>
                <div className='sidebar_stats'>
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="sidebar_statNumber">204</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>Views on Post</p>
                        <p className="sidebar_statNumber">2,072</p>
                    </div>
                </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar