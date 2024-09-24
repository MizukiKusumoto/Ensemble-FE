import React from 'react';
import { Stack } from '@mui/material';
import NewRequest from './components/newRequest/newRequest';
import Recruit from '../../../components/recruit/Recruit';

export default function Request() {
  return (
    <Stack spacing={10} sx={{ padding: '20px 100px' }}>
      <NewRequest />
      <Stack>
        <h2>自分の募集一覧：</h2>
        <Stack spacing={5}>
          <Recruit />
          <Recruit />
        </Stack>
      </Stack>
    </Stack>
  );
}
