import {
  AttachFile,
  Home,
  MessageRounded,
  Person,
  Search,
} from '@mui/icons-material';

import React from 'react';
import './Sidebar.css';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const [sidebarListItemSub] = React.useState(false);
  const toggleAlignment = () => {
    sidebarListItemSub(!sidebarListItemSub);
  }
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Link onClick={toggleAlignment}  to='/' style={{ textDecoration: 'none', color: 'white'}}>
            <div className={'isActive' ? 'active':''}>
              <Home className='sidebarIcon' />  
              <span className='sidebarListItemText'>Home</span>
            </div>
            </Link>
          </li>

          <li className='sidebarListItemSub'>
            <Link   to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <AttachFile className='sidebarIconSub' />
            <span className='sidebarListItemTextSub'>Matching</span>
            </Link>
          </li>
          
          <li className='sidebarListItem'>
            <AttachFile className='sidebarIcon' />
            <span className='sidebarListItemText'>Post</span>
          </li>
          <li className='sidebarListItem'>
            <Search className='sidebarIcon' />
            <span className='sidebarListItemText'>Search</span>
          </li>
          <li className='sidebarListItem'>
            <MessageRounded className='sidebarIcon' />
            <span className='sidebarListItemText'>Message</span>
          </li>
          {/* <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>ブックマーク</span>
          </li> */}
          <li className='sidebarListItem'>
            <Person className='sidebarIcon' />
            <Link
              to='/profile/mizuki'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <span className='sidebarListItemText'>Profile</span>
            </Link>
          </li>
          {/* <li className='sidebarListItem'>
            <Settings className='sidebarIcon' />
            <span className='sidebarListItemText'>設定</span>
          </li> */}
        </ul>

        {/*<ul className='sidebarFriendList'>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>*/}
      </div>
    </div>
  );
}
