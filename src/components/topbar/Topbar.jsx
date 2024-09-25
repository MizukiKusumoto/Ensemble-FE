// import { Search } from '@mui/icons-material';
import React, { useContext } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import { Box, Button } from '@mui/material';
import { logoutCall } from '../../actionCalls';

export default function Topbar({ sidebar }) {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const isoString = user.latest_login;
  const datePart = isoString ? isoString.split('T')[0] : '';
  const timePart = isoString ? isoString.split('T')[1].split('.')[0] : '';
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLogout = () => {
    logoutCall(dispatch);
  };
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Ensemble!</span>
          <span className='logo2'>connect with the world.</span>
        </Link>
      </div>
      <div className='topbarRight'>
        {sidebar === 'home' && (
          <Button
            variant='contained'
            color='secondary'
            href='/login'
            onClick={() => handleLogout()}
            style={{ marginRight: '10px' }}
          >
            Logout
          </Button>
        )}
        <div className='rectangle_border_user'>
          <Box sx={{ whiteSpace: 'pre-wrap' }}>{'user:\n' + user.name}</Box>
        </div>
        <div className='rectangle_border_loginDate'>
          <Box sx={{ whiteSpace: 'pre-wrap' }}>
            {'latest login:\n' + datePart + '\n' + timePart}
          </Box>
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
