import React, { useContext, useEffect, useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import './Profile.css';
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Modal,
  Stack,
  TextField,
} from '@mui/material';
import { Settings } from '@mui/icons-material';
import { tags } from '../../App';
import Recruit from '../../components/recruit/Recruit';
import { AuthContext } from '../../state/AuthContext';

export default function Profile({ sidebar, setSidebar }) {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [open, setOpen] = React.useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Topbar />
      <Stack direction='row'>
        <Stack flex={1}>
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </Stack>
        <Stack flex={3}>
          <Box className='profileContainer' marginBottom={10}>
            <img
              src={user.coverPicture || PUBLIC_FOLDER + 'image.png'}
              alt=''
              className='profileCoverImg'
            />
            <Stack
              direction='row'
              className='profileInfoContainer'
              alignItems='end'
            >
              <Avatar
                src={user.profilePicture || PUBLIC_FOLDER + 'person.png'}
                alt=''
                className='profileUserImg'
                sx={{ width: '50px', height: '50px' }}
              />
              <h2>{user.name}</h2>
              <Stack direction='row' marginLeft={5} marginBottom='3px'>
                <p>利用開始：{user.created_at}</p>
                <p>　アクティブランク：Rank{user.activity}</p>
              </Stack>
              <Button
                onClick={handleOpen}
                disableRipple
                color='inherit'
                sx={{
                  '&:hover': {
                    color: 'blue',
                    backgroundColor: 'inherit',
                  },
                }}
              >
                <Settings />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='child-modal-title'
                aria-describedby='child-modal-description'
              >
                <Box className='settings'>
                  <h2 id='child-modal-title'>ユーザー設定</h2>
                  <p id='child-modal-description'>タグを設定できます。</p>
                  <Autocomplete
                    multiple
                    id='tags-outlined'
                    options={tags}
                    getOptionLabel={(option) => option.label}
                    filterSelectedOptions
                    value={selectedTags}
                    onChange={(event, newValue) => {
                      setSelectedTags(newValue); // 選択された値を更新
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <Button onClick={handleClose}>閉じる</Button>
                </Box>
              </Modal>
            </Stack>
          </Box>
          <Stack direction='row'>
            <Stack flex={2}>
              <Timeline />
            </Stack>
            <Stack flex={1.5}>
              <h3>応募中の募集：</h3>
              <Recruit />
              <h3>作成済みの募集：</h3>
              <Recruit />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
