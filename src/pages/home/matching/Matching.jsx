import React, { useContext, useState, useEffect } from 'react';
import { Box, Button, Stack } from '@mui/material';
import MatchedUser from './components/matchedUser/MatchedUser';
import Share from './components/share/Share';
import axios from 'axios';
import { AuthContext } from '../../../state/AuthContext';

export default function Matching() {
  const { user } = useContext(AuthContext);
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [count, setCount] = useState(2);

  const handleMore = () => {
    setCount(count + 2);
  };

  useEffect(() => {
    const fetchMatchedUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/similar/${user.id}`
        );
        setMatchedUsers(response.data || []);
      } catch (error) {
        console.error('Error fetching matched users', error);
      }
    };

    fetchMatchedUsers();
  }, [user]);

  return (
    <Stack flex={3} spacing={5} sx={{ padding: '20px 100px' }}>
      <Box>
        <Stack spacing={1}>
          <h2>おすすめのユーザー：</h2>
          {matchedUsers.slice(0, count).map((matchedUser, index) => (
            <MatchedUser
              key={index}
              userName={matchedUser.name}
              matchedTags={matchedUser.labels ? matchedUser.labels : []}
              percentage={(matchedUser.similarity * 100).toFixed(2)} // 小数点を2桁にする
            />
          ))}
        </Stack>
        {count < matchedUsers.length && (
          <Button
            onClick={handleMore}
            color='primary'
            sx={{
              alignSelf: 'flex-start',
              marginTop: '10px',
              textDecoration: 'underline',
            }}
          >
            さらに読み込む
          </Button>
        )}
      </Box>

      <Share />
    </Stack>
  );
}
