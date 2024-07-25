import Button from '../../components/Button/button'
import Input from '../../components/Input/input'
import './login.scss'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const navToHome = ()=>{
        navigate('/home')
    }
    return (
        <div className='Login'>
            <div className='bgCover'></div>
            <div className='container'>
                <h2> התחברות</h2>
                <Button text='התחבר באמצעות גוגל ' onClick={navToHome} />
            </div>
        </div>
    )
}
