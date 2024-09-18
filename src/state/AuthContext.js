import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const initialState = {
  user: {
    _id: '616b7c6f1e3b4f001e8d5b1e',
    username: 'admin',
    email: 'test@gmail.com',
    password: '$2b$10$8B7v4wT6dV8y4Q4zg5tJ7u2YzRfj9k5WQ5g6U5k6Q2o9w4z7y6t4e',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: true,
    desc: 'Hello World!',
    loginDate:'2024/9/11',
    loginTime:'16:34',
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
