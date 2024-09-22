import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Chip, Grid2, LinearProgress, Stack } from '@mui/material';

export default function MatchedUser({
  icon_url,
  userName,
  matchedTags,
  percentage,
}) {
  return (
    <Card sx={{ padding: '0', width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {userName[0]}
          </Avatar>
        }
        title={userName}
        sx={{ padding: '10px 10px 0 10px' }}
      />
      <CardContent sx={{ padding: '0px 10px 0 65px' }}>
        <Grid2 container>
          <Grid2 size={3}>
            <Typography
              variant='body2'
              sx={{ color: 'text.secondary' }}
              flex={2}
            >
              あなたとマッチした属性：
            </Typography>
          </Grid2>
          <Grid2 size={9}>
            <Stack direction='row' flexWrap='wrap'>
              {matchedTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  color='primary'
                  sx={{
                    margin: '0 5px 5px 5px',
                    minWidth: '60px',
                    backgroundColor: 'purple',
                  }}
                />
              ))}
            </Stack>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 size={2}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              マッチ度：{percentage}%
            </Typography>
          </Grid2>
          <Grid2 size={10}>
            <LinearProgress
              variant='determinate'
              value={percentage}
              color='primary'
              sx={{
                height: '15px',
                marginTop: '3px',
                '&.MuiLinearProgress-root': {
                  backgroundColor: 'transparent',
                },
              }}
            />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
}
