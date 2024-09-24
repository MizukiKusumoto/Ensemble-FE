import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
import { useState } from 'react';
import Matching from './matching/Matching';
import { Stack } from '@mui/material';
import Request from './request/Request';

export default function Home({ sidebar, setSidebar }) {
  const [mode, setMode] = useState('matching');
  return (
    <>
      <Topbar sidebar={sidebar} />
      <Stack direction='row'>
        <Stack flex={1}>
          <Sidebar
            sidebar={sidebar}
            setSidebar={setSidebar}
            child={mode}
            setChild={setMode}
          />
        </Stack>
        {mode === 'matching' && (
          <Stack flex={3}>
            <Matching />
          </Stack>
        )}
        {mode === 'request' && (
          <Stack flex={3}>
            <Request />
          </Stack>
        )}
        {mode === 'apply' && <Stack flex={3}></Stack>}
      </Stack>
    </>
  );
}
