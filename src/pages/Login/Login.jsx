import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';
import styles from './login.module.scss';
import axios from 'axios';

export default function Login() {
    const clientId = import.meta.env.VITE_APP_USER_ID;
    const [userInfo, setUserInfo] = useState();

    const token = localStorage.getItem('token');
    console.log("ID de cliente de GoogleOauth:", clientId);

    const handleLoginSuccess = (userInfo) => {
        setUserInfo(userInfo);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUserInfo(null); 
    };





if(token && !userInfo){
    const getUserInfo = async () => {
        try {
          const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
          const userInfo = userInfoResponse.data;
          setUserInfo(userInfo);
        } catch (error) {
          console.error('Error getting user info:', error);
        }
      };
      getUserInfo();
    }



    return (
        <div className={styles.container}>
            <GoogleOAuthProvider clientId={clientId}>
                {userInfo ? (
                    <div className={styles.userInfo}>
                        <h2>{userInfo.name}</h2>
                        <p>{userInfo.email}</p>
                        <div className={styles.profile}>
                        <img src={userInfo.picture} alt="Profile" />
                        <button className={styles.logoutButton} onClick={handleLogout}>
                            Logout
                        </button>
                        </div>
                    </div>
                ) :  <GoogleLogin onLoginSuccess={handleLoginSuccess} />
                }
            </GoogleOAuthProvider>
        </div>
    );
}
