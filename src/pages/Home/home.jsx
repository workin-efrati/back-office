import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/header'
import Main from '../../components/Main/main'
import PopUp from '../../components/PopUp/popUp'
import './home.scss'

export default function Home() {
  return (
    <div className='Home'>
      <Header />
      <Main>
        
        <Outlet />
      </Main>
      {/* <PopUp confirmFunc={()=>{}} 
cancelFunc={()=>{}} 
text={"השאלה תמחק לצמיתות"} /> */}
    </div>

  )
}
