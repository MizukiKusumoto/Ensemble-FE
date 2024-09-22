import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
import Matching from './matching/Matching';
import { Stack } from '@mui/material';

export default function Home() {
  const [mode, setMode] = React.useState('matching');
  return (
    <>
      <Topbar />
      <Stack direction='row'>
        <Stack flex={1}>
          <Sidebar mode={mode} setMode={setMode} />
        </Stack>
        <Stack flex={3}>{mode === 'matching' && <Matching />}</Stack>
      </Stack>
    </>
  );
}
