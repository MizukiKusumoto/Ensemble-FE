import React, { useContext, useRef, useState } from 'react';
import './Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import { loginCall } from '../../actionCalls';
import { Autocomplete, TextField } from '@mui/material';
import { tags } from '../../App';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const [labels, setLabels] = useState([]);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity(
        'パスワードが一致しません'
      );
    } else {
      try {
        const user = {
          name: username.current.value,
          email: email.current.value,
          password: password.current.value,
          labels: labels.map((label) => label.label), // 選択されたラベルを取得
        };
        await axios.post('http://localhost:8000/user/new', user);
        loginCall(
          { email: email.current.value, password: password.current.value },
          dispatch
        );
      } catch (err) {
        console.log(err);
        alert('登録に失敗しました');
      }
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Ensemble</h3>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>新規登録はこちら</p>
            <input
              type='text'
              placeholder='ユーザー名'
              className='loginInput'
              required
              ref={username}
            />
            <input
              type='email'
              placeholder='Eメール'
              className='loginInput'
              required
              ref={email}
            />
            <input
              type='password'
              placeholder='パスワード'
              className='loginInput'
              required
              minLength='6'
              ref={password}
            />
            <input
              type='password'
              placeholder='確認用パスワード'
              className='loginInput'
              required
              minLength='6'
              ref={passwordConfirmation}
            />
            <Autocomplete
              multiple
              id='tags-outlined'
              options={tags}
              getOptionLabel={(option) => option.label}
              filterSelectedOptions
              value={labels}
              onChange={(event, newValue) => {
                setLabels(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={labels.length ? '' : '属性を選択'}
                />
              )}
              sx={{ marginBottom: '10px' }}
              size='small'
            />
            <button type='submit' className='loginButton'>
              サインアップ
            </button>
            <Link
              to='/login'
              className='loginRegisterButtonWrapper'
              style={{ textDecoration: 'none' }}
            >
              <button className='loginRegisterButton'>ログイン</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
