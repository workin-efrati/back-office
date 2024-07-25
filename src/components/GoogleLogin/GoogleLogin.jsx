import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import styles from './googleLogin.module.scss';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

export default function GoogleLogin({ onLoginSuccess }) {

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      
      localStorage.setItem('token', tokenResponse.access_token);

      console.log("token:", tokenResponse);
      try {
        const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`);
        const userInfo = userInfoResponse.data;

        await axios.post('http://localhost:3001/users', userInfo);

        console.log('User info saved:', userInfo);
        onLoginSuccess(userInfo); 

      } catch (error) {
        console.error('Error saving user info:', error);
      }
    },
    onError: () => console.log('Login Failed'),
  });

  return (
    <div className={styles.container}>
      <button className={styles.loginButton} onClick={() => login()}>
        Sign in with Google <FaGoogle />
      </button>
    </div>
  );
}
