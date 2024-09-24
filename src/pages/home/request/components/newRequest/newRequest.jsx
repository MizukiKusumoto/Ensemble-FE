import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../../../state/AuthContext';
import axios from 'axios';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export default function NewRequest() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const title = useRef();
  const [file, setFile] = useState(null);

  const rolls = [
    { label: '演出家', value: 'director' },
    { label: '脚本家', value: 'scriptwriter' },
    { label: '俳優', value: 'actor' },
    { label: '舞台監督', value: 'stage_director' },
    { label: '舞台美術家', value: 'stage_designer' },
    { label: '舞台照明家', value: 'lighting_designer' },
    { label: '舞台音響家', value: 'sound_designer' },
  ];

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
      <h2>新規募集を作成：</h2>
      <Card
        sx={{
          padding: '0',
          width: '100%',
          boxShadow: 'none',
          border: '1.5px solid gray',
        }}
      >
        <CardContent>
          <TextField
            inputRef={title}
            multiline
            placeholder='募集タイトルを入力'
            minRows={1}
            sx={{
              width: '100%',
              '& fieldset': { border: '1.5px solid lightblue' },
            }}
          />
          <Stack direction='row'>
            <Stack flex={1}>
              <Box
                sx={{
                  border: '1.5px solid lightblue',
                  margin: '5px 5px 5px 0',
                  borderRadius: '5px',
                  padding: '5px',
                }}
              >
                実施期間：[　]月[　]旬～[　]月[　]旬
                <br />
                公演日（オプション）：追加▼
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
                }}
              >
                <Stack flex={1} sx={{ justifyContent: 'center' }}>
                  <Typography>募集ロール：</Typography>
                </Stack>
                <Stack flex={2} sx={{ justifyContent: 'center' }}>
                  <Autocomplete
                    multiple
                    id='tags-outlined'
                    options={rolls}
                    getOptionLabel={(option) => option.label}
                    filterSelectedOptions
                    renderInput={(params) => <TextField {...params} />}
                    size='small'
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <TextField
            inputRef={desc}
            multiline
            minRows={3}
            placeholder='詳細を記入'
            sx={{
              width: '100%',
              '& fieldset': { border: 'none' },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              className='shareButton'
              sx={{ height: '100%' }}
              onClick={(e) => handleSubmit(e)}
            >
              投稿する
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
