import DataButton from '../../components/DataButton/DataButton'
import DataInput from '../../components/DataInput/DataInput'
import Navbar from '../../components/HomeNavbar/Navbar'
import './SignIn.css'
import {useNavigate} from 'react-router-dom'


const SignIn = () => {

    const navigate = useNavigate()

    
    
    return(
        <>
        <div className='sigin_body'>
            
        <Navbar></Navbar>
        

        

        <div className="container">
        <div className='signin_container'>
                    <div className="row">
                        <div className="col-12 bg-light">
                        <div className="row">
                        <h1 className="text-center pt-6 mt-4 mb-3 text-center text-dark text-display-3">Sign In</h1>
                        <div className='col'></div>
                    <div className="col-9">
                    <form>
                        <DataInput label_text={"E-Mail"}/>
                        <DataInput label_text={"Password"}/>
                        <div className="row">
                            <div className="col-6"><DataButton button_text={"LOG IN"} button_onClick={()=>{
                                alert("Giriş Yapıldı")
                            }}
                            /> </div> 
                            <div className="col-6"><DataButton button_text={"FORGOT PASSWORD"} button_onClick={()=>{
                                navigate('/forgotpassword')
                            }}/></div>
                            <div className="col-12"><DataButton button_text={"SIGN UP"} button_onClick={()=>{
                                navigate('/signup')
                            }}/></div>
                        </div>
                    </form>
                    </div>
                    <div className='col'></div>
                        </div>
                        </div>    
                    </div>
                </div>

                
        </div>
        </div>
    </>
    )
}

export default SignIn