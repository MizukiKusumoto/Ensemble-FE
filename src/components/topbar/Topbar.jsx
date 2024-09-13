// import { Search } from '@mui/icons-material';
import React, { useContext } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import { Box } from "@mui/material";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const { username } = useContext(AuthContext);
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Ensemble!</span>
          <span className='logo2'>connect with the world.</span>
        </Link>
      </div>
      {/* <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            type='text'
            className='searchInput'
            placeholder='探し物はなんですか？'
          />
        </div>
      </div> */}
      <div className='topbarRight'>
        <div className="rectangle_border_user">
          <Box sx={{whiteSpace:"pre-wrap"}}>{'user:\n'+user.username}</Box>
        </div>
        <div className="rectangle_border_loginDate">
          <Box sx={{whiteSpace:"pre-wrap"}}>{'latest login:\n'+user.loginDate+'\n'+user.loginTime}</Box>
        </div>
        {/* <div className='topbarIconItems'>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                PUBLIC_FOLDER +
                (user.profilePicture
                  ? user.profilePicture
                  : '/person/noAvatar.png')
              }
              alt=''
              className='topbarImage'
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
