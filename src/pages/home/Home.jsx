import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
import { useState } from 'react';
import Matching from './matching/Matching';
import { Stack } from '@mui/material';

export default function Home({ sidebar, setSidebar }) {
  const [mode, setMode] = useState('matching');
  return (
    <>
      <Topbar />
      <Stack direction='row'>
        <Stack flex={1}>
          <Sidebar
            sidebar={sidebar}
            setSidebar={setSidebar}
            child={mode}
            setChild={setMode}
          />
        </Stack>
        <Stack flex={3}>{mode === 'matching' && <Matching />}</Stack>
      </Stack>
    </>
  );
}
