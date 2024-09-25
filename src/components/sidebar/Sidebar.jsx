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
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar({ sidebar, setSidebar, child, setChild }) {
  const toggleAlignment = (str) => {
    setSidebar(str);
  };
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li
            className={
              sidebar === 'home' ? 'sidebarListItemActive' : 'sidebarListItem'
            }
          >
            <Link
              onClick={() => toggleAlignment('home')}
              to='/home'
              style={{
                textDecoration: 'none',
                color: sidebar === 'home' ? 'white' : 'black',
              }}
            >
              <div>
                <Home className='sidebarIcon' />
                <span className='sidebarListItemText'>Home</span>
              </div>
            </Link>
          </li>

          {sidebar === 'home' && (
            <>
              <li
                className='sidebarListItemSub'
                style={{
                  backgroundColor: child === 'matching' ? '#ffae00' : '#3fa7c9',
                }}
              >
                <Link
                  onClick={() => setChild('matching')}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Group className='sidebarIconSub' />
                  <span className='sidebarListItemTextSub'>Matching</span>
                </Link>
              </li>
              <li
                className='sidebarListItemSub'
                style={{
                  backgroundColor: child === 'request' ? '#ffae00' : '#3fa7c9',
                }}
              >
                <Link
                  onClick={() => setChild('request')}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Edit className='sidebarIconSub' />
                  <span className='sidebarListItemTextSub'>Request</span>
                </Link>
              </li>
              <li
                className='sidebarListItemSub'
                style={{
                  backgroundColor: child === 'apply' ? '#ffae00' : '#3fa7c9',
                }}
              >
                <Link
                  onClick={() => setChild('apply')}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <TaskAlt className='sidebarIconSub' />
                  <span className='sidebarListItemTextSub'>Apply</span>
                </Link>
              </li>
            </>
          )}

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
          <li
            className={
              sidebar === 'profile'
                ? 'sidebarListItemActive'
                : 'sidebarListItem'
            }
          >
            <Person className='sidebarIcon' />
            <Link
              onClick={() => toggleAlignment('profile')}
              to='/profile'
              style={{
                textDecoration: 'none',
                color: sidebar === 'profile' ? 'white' : 'black',
              }}
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
