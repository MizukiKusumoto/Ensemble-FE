import { useContext } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AuthContext } from './state/AuthContext';
import { useState } from 'react';

function App() {
  const { user } = useContext(AuthContext);
  const [sidebarListItemSub, setSidebarListItemSub] = useState('home');

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route
          path='/home'
          element={
            user ? (
              <Home
                sidebar={sidebarListItemSub}
                setSidebar={setSidebarListItemSub}
              />
            ) : (
              <Navigate to='/register' />
            )
          }
        />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route
          path='/profile'
          element={
            <Profile
              sidebar={sidebarListItemSub}
              setSidebar={setSidebarListItemSub}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

export const tags = [
  { label: '演劇', value: 'play' },
  { label: '音楽', value: 'music' },
  { label: '映画', value: 'movie' },
  { label: 'ダンス', value: 'dance' },
  { label: '美術', value: 'art' },
  { label: '文学', value: 'literature' },
  { label: '料理', value: 'cooking' },
  { label: 'スポーツ', value: 'sports' },
  { label: '旅行', value: 'travel' },
];
