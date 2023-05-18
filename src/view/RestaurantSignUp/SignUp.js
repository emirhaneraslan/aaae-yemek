import DataButton from '../../components/DataButton/DataButton'
import DataInput from '../../components/DataInput/DataInput'
import Navbar from '../../components/HomeNavbar/Navbar'
import './SignUp.css'
import {useNavigate} from 'react-router-dom'


const RestaurantSignUp = () => {

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
                        <h1 className="text-center pt-6 mt-4 mb-3 text-center text-dark text-display-3">Restaurant Sign Up</h1>
                        <div className='col'></div>
                    <div className="col-9">
                    <form>
                        <DataInput label_text={"Restaurant Name"} />
                        <DataInput label_text={"Email"}/>
                        <DataInput label_text={"Password"}/>
                        <DataInput label_text={"Phone Number"}/>
                        <DataInput label_text={"Tax Id"}/>
                        <DataInput label_text={"Restaurant Adress"}/>
                        <DataInput label_text={"Restaurant Img Url"}/>
                        <textarea placeholder="Info" className="contact_field"></textarea>
                        <div className="row">
                            <div className="col-6"><DataButton button_text={"SUBMİT"} button_onClick={()=>{
                                navigate('/updaterestaurant')
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

export default RestaurantSignUp