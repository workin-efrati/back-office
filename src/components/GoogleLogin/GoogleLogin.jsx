import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import './googleLogin.scss';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

export default function GoogleLogin({ onLoginSuccess }) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`);
        const userInfo = userInfoResponse.data;
        onLoginSuccess({ token: tokenResponse.access_token, ...userInfo });
      } catch (error) {
        console.error('Error saving user info:', error);
      }
    },
    onError: () => console.log('Login Failed'),
  });

  return (
    <button className="GoogleLogin" onClick={() => login()}>
      Sign in with Google 
    </button>
  );
}
