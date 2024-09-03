import React, { useRef } from 'react';
import './Register.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity(
        'パスワードが一致しません'
      );
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Ensemble</h3>
          <span className='loginDesc'>本格的なSNSを、自分の手で</span>
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
