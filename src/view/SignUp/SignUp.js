import DataButton from '../../components/DataButton/DataButton'
import DataInput from '../../components/DataInput/DataInput'
import Navbar from '../../components/HomeNavbar/Navbar'
import './SignUp.css'
import {useNavigate} from 'react-router-dom'


const SignUp = () => {

    const navigate = useNavigate()

    

    return(
        <>
        <div className='signup_body'>

            <Navbar></Navbar>

            <div className="container">
            <div className="signup_container">
                    <div className="row">
                        <div className="col-12 bg-light">
                        <div className="row">
                        <h1 className="text-center pt-6 mt-4 mb-3 text-center text-dark text-display-3">Sign Up</h1>
                        <div className='col'></div>
                    <div className="col-9">
                    <form>
                        <DataInput label_text={"First Name"} />
                        <DataInput label_text={"Last Name"}/>
                        <DataInput label_text={"E-Mail"}/>
                        <DataInput label_text={"Password"}/>
                        <DataInput label_text={"Phone Numner"}/>
                        <div className="row">
                            <div className="col-6"><DataButton button_text={"SUBMİT"} button_onClick={()=>{
                                navigate('/updateuser')
                            }}/> </div>
                            <div className="col-6"><DataButton button_text={"SIGN IN"} button_onClick={()=>{
                                navigate('/signin')
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

export default SignUp