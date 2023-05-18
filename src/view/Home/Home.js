import './Home.css'
import {useNavigate} from 'react-router-dom'
import HomeNavbar from '../../components/HomeNavbar/Navbar'
const Home = () => {
    const navigate = useNavigate()
    return(
        <>
        <div className="homeview_wrapper">
        <HomeNavbar/>

    <div class="homeview_center">
    <h1 className='homeview_h1'>Welcome To AAAEYemek</h1>
    <h2 className='homeview_h2'>You Can Eat</h2>
    <div class="homeview_buttons">
    <button className='homeview_button' onClick={()=>{
        navigate('/signup')
    }}>Sign Up</button>
    <button onClick={()=>{
        navigate('/signin')
    }} class="btn2 homeview_button">Sign In</button>
    </div>
    </div>
        </div>
        </>
    )
}

export default Home