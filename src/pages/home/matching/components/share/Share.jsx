import React, { useContext, useRef, useState } from 'react';
import './Share.css';
import { AuthContext } from '../../../../../state/AuthContext';
import axios from 'axios';
import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { tags } from '../../../../../App';

export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [postType, setPostType] = useState('post');

  const handlePostTypeChange = (event, newPostType) => {
    setPostType(newPostType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post('/posts', newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    desc.current.value = '';
  };

  return (
    <Stack>
      <h2>新規作成：</h2>
      <ToggleButtonGroup
        value={postType}
        exclusive
        onChange={handlePostTypeChange}
        sx={{ paddingBottom: '10px' }}
      >
        <ToggleButton value='post'>投稿</ToggleButton>
        <ToggleButton value='recruit'>募集</ToggleButton>
      </ToggleButtonGroup>
      <Card sx={{ padding: '0', width: '100%' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              {user.username[0]}
            </Avatar>
          }
          title={'投稿を作成：'}
          sx={{ padding: '10px 10px 0 10px', color: 'gray' }}
        />
        <CardContent sx={{ padding: '0px 10px 0 50px' }}>
          <TextField
            inputRef={desc}
            multiline
            minRows={1}
            sx={{
              width: '100%',
              '& fieldset': { border: 'none' },
            }}
          />
          <Grid2 container>
            <Grid2 size={9}>
              <Autocomplete
                multiple
                id='tags-outlined'
                options={tags}
                getOptionLabel={(option) => option.label}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid2>
            <Grid2 size={1}>
              <Box />
            </Grid2>
            <Grid2 size={2}>
              <button
                className='shareButton'
                type='submit'
                style={{ height: '100%' }}
                onClick={(e) => handleSubmit(e)}
              >
                投稿する
              </button>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Stack>
  );
}
