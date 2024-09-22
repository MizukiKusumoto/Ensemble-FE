import {
  AttachFile,
  Edit,
  Group,
  Home,
  MessageRounded,
  Person,
  Search,
  TaskAlt,
} from '@mui/icons-material';

import React from 'react';
import './Sidebar.css';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar({sidebar, setSidebar, child, setChild}){
  const toggleAlignment = (str) => {
    setSidebar(str);
  }
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className={sidebar == 'matching' ? 'sidebarListItemActive' : 'sidebarListItem'}>
            <Link onClick={() => toggleAlignment("matching")}  to='/'>
            <div className={'isActive' ? 'active':''}>
              <Home className='sidebarIcon'/>  
              <span className='sidebarListItemText'>Home</span>
            </div>
            </Link>
          </li>

          {(sidebar == "matching") && (<>
          <li className='sidebarListItemSub' style={{ backgroundColor: child == "matching" ? "#ffae00" : "#3fa7c9" }}>
            <Link onClick={() => setChild("matching")}  to='/' style={{ textDecoration: 'none', color: 'white'}}>
            <Group className='sidebarIconSub' />
            <span className='sidebarListItemTextSub'>Matching</span>
            </Link>
          </li>
          <li className='sidebarListItemSub' style={{ backgroundColor: child == "request" ? "#ffae00" : "#3fa7c9" }}>
            <Link onClick={() => setChild("request")}  to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <Edit className='sidebarIconSub' />
            <span className='sidebarListItemTextSub'>Request</span>
            </Link>
          </li>
          <li className='sidebarListItemSub' style={{ backgroundColor: child == "apply" ? "#ffae00" : "#3fa7c9" }}>
            <Link onClick={() => setChild("apply")}  to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <TaskAlt className='sidebarIconSub' />
            <span className='sidebarListItemTextSub'>Apply</span>
            </Link>
          </li></>)}
          
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
              onClick={() => toggleAlignment("profile")}
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
