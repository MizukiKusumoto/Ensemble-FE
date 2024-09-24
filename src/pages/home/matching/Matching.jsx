import React from 'react';
import { Stack } from '@mui/material';
import MatchedUser from './components/matchedUser/MatchedUser';
import Share from './components/share/Share';

export default function Matching() {
  return (
    <Stack flex={3} spacing={5} sx={{ padding: '20px 100px' }}>
      <Stack spacing={1}>
        <h2>おすすめのユーザー：</h2>
        <MatchedUser
          userName={'Mizuki'}
          matchedTags={['a', 'b']}
          percentage={99}
        />
        <MatchedUser
          userName={'Mizu'}
          matchedTags={['ccccccccccccccccccccccccccc']}
          percentage={10}
        />
      </Stack>
      <Share />
    </Stack>
  );
}
