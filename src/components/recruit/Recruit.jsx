import React, { useContext } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { AuthContext } from '../../state/AuthContext';
import { red } from '@mui/material/colors';

export default function Recruit() {
  const { user } = useContext(AuthContext);

  const recommendedUser = ['user1', 'user2', 'user3', 'user4', 'user5'];

  const requestedRolls = ['演出家', '脚本家', '俳優'];

  return (
    <Card
      sx={{
        padding: '0',
        width: '100%',
        backgroundColor: '#C2E3EE',
        boxShadow: 'none',
        border: '1.5px solid gray',
      }}
    >
      <CardContent>
        <Stack direction='row'>
          <Stack flex={6}>
            <Box
              sx={{
                border: '1.5px solid lightblue',
                margin: '5px 5px 5px 0',
                borderRadius: '5px',
                padding: '5px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography>一緒に作曲しませんか？</Typography>
            </Box>
          </Stack>
          <Stack flex={1}></Stack>
          <Stack flex={3}>
            <Stack direction='row' sx={{ justifyContent: 'center' }}>
              <Avatar
                sx={{ bgcolor: red[500], marginRight: '15px' }}
                aria-label='recipe'
              >
                {user.name[0]}
              </Avatar>
              <Stack direction='column' spacing={0}>
                <Stack direction='column' spacing={0}>
                  <Typography
                    sx={{
                      margin: 0,
                      padding: 0,
                      lineHeight: 1,
                      display: 'inline-block',
                      fontSize: '30px',
                    }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    sx={{
                      margin: 0,
                      padding: 0,
                      lineHeight: 1,
                      display: 'inline-block',
                      fontSize: '12px',
                    }}
                  >
                    2024/5/12
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction='row'>
          <Stack flex={1}>
            <Box
              sx={{
                border: '1.5px solid lightblue',
                margin: '5px 5px 5px 0',
                borderRadius: '5px',
                padding: '5px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              実施期間：８月上旬～９月下旬
            </Box>
          </Stack>
          <Stack flex={1}>
            <Stack
              direction='row'
              sx={{
                border: '1.5px solid lightblue',
                margin: '5px 0px 5px 5px',
                borderRadius: '5px',
                padding: '5px',
                height: '100%',
                backgroundColor: 'white',
              }}
            >
              <Stack flex={1} sx={{ justifyContent: 'center' }}>
                <Typography>募集ロール：</Typography>
              </Stack>
              <Stack flex={2} direction='row' flexWrap='wrap'>
                {requestedRolls.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    color='primary'
                    sx={{
                      margin: '0 5px',
                      minWidth: '60px',
                      backgroundColor: 'purple',
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Box sx={{ fontSize: '13px' }}>
          一人での作曲に限界を感じている方、一緒に作曲してみませんか？
          特に明確な期限は決めず、無理のないペースに調整しながら、一曲完成させることを目標にします！一緒に…
        </Box>
        <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack flex={1} sx={{ justifyContent: 'center' }}>
            <Typography>おすすめの参加可能ユーザー▼</Typography>
          </Stack>
          <Stack flex={2} direction='row' flexWrap='wrap'>
            {recommendedUser.map((user) => (
              <Avatar key={user} sx={{ bgcolor: red[500], marginRight: '5px' }}>
                {user[0]}
              </Avatar>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
