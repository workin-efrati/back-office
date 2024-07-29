import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/header'
import Main from '../../components/Main/main'
import PopUp from '../../components/PopUp/popUp'
import './home.scss'
import { useApi } from '../../hooks/useApi'
import { useEffect, useState } from 'react'

export default function EditQa() {
  const[messages, setMessages]=useState([]);

  const fechData = async () => {
    return await useApi({ method: 'POST', body: { "from": "3/13/21, 21:19", "to": "3/25/21, 21:19", "limit": 2 }, url: '/messages' })

  }
  useEffect(() => {
    fechData().then((data) => setMessages(data))
    
    console.log('messages')
  }, [])

  return (
    <div className='Home'>
      <h1>עריכת שאלות ותשובות</h1>
    </div>

  )
}
