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

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon' />
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
              <span className='sidebarListItemText'>Home</span>
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
