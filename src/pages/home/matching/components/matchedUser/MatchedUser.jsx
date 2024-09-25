import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Chip, Stack, LinearProgress, Box } from '@mui/material';

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
        titleTypographyProps={{
          fontSize: '30px',
        }}
        sx={{ padding: '10px 10px 0 10px' }}
      />
      <CardContent sx={{ padding: '0px 10px 0 65px' }}>
        <Stack spacing={2}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Typography>あなたとマッチした属性：</Typography>
            <Stack direction='row' flexWrap='wrap'>
              {matchedTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  color='primary'
                  sx={{
                    margin: '0 5px 5px 0',
                    minWidth: '60px',
                    backgroundColor: 'purple',
                  }}
                />
              ))}
            </Stack>
          </Stack>

          <Stack direction='row' alignItems='center' spacing={2}>
            <Typography>マッチ度：</Typography>
            <Box sx={{ position: 'relative', flexGrow: 1 }}>
              <LinearProgress
                variant='determinate'
                value={percentage}
                color='primary'
                sx={{
                  height: '15px',
                  borderRadius: '5px',
                }}
              />
              <Typography
                variant='body2'
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '5px',
                  color: 'white',
                  fontWeight: 'bold',
                  lineHeight: '15px',
                }}
              >
                {percentage}%
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
