import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';





function Post({name, description, message,photoUrl}) {
  return (
    <div className="post">
        <div className="post_header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpOffAltIcon } title="Like" color="gray"/>
            <InputOption Icon={CommentOutlinedIcon } title="Comment" color="gray"/>
            <InputOption Icon={ShareIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
}

export default Post