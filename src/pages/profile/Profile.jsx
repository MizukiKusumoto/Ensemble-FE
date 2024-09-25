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
import axios from 'axios';

export default function Profile({ sidebar, setSidebar }) {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [open, setOpen] = React.useState(false);
  const [selectedTags, setSelectedTags] = useState(
    user.labels ? user.labels.map((label) => ({ label })) : []
  );
  const [availableTags, setAvailableTags] = useState([]);
  useEffect(() => {
    const filteredTags = tags.filter(
      (tag) => !selectedTags.some((selected) => selected.label === tag.label)
    );
    setAvailableTags(filteredTags);
  }, [selectedTags]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedTags(user.labels ? user.labels.map((label) => ({ label })) : []);
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put('http://localhost:8000/user/labels', {
      id: user.id,
      labels: selectedTags.map((tag) => tag.label),
    });
    user.labels = res.data.labels;
    localStorage.setItem('user', JSON.stringify(user));
    handleClose();
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
              alignItems='flex-end'
            >
              <Avatar
                src={user.profilePicture || PUBLIC_FOLDER + 'person.png'}
                alt=''
                className='profileUserImg'
                sx={{ width: '50px', height: '50px' }}
              />
              <h2 style={{ marginLeft: '100px' }}>{user.name}</h2>
              <Stack direction='row' marginLeft={5} marginBottom='3px'>
                <p>利用開始：{user.created_at.split('T')[0]}</p>
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
                <form onSubmit={handleSubmit}>
                  <Box className='settings'>
                    <h2 id='child-modal-title'>ユーザー設定</h2>
                    <p id='child-modal-description'>タグを設定できます。</p>
                    <Autocomplete
                      multiple
                      id='tags-outlined'
                      options={availableTags} // useStateで管理されたオプション
                      getOptionLabel={(option) => option.label}
                      filterSelectedOptions
                      value={selectedTags}
                      onChange={(event, newValue) => {
                        setSelectedTags(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <Button type='submit'>変更</Button>
                    <Button onClick={handleClose}>閉じる</Button>
                  </Box>
                </form>
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
