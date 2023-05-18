import Footer from "../../components/FixedFooter/Footer"
import Navbar from "../../components/HomeNavbar/Navbar"
import './UpdateUser.css'
import {useNavigate} from 'react-router-dom'


const UpdateUser = () => {
    const navigate = useNavigate()

    return(
        <>
		
		<Navbar/>
        

        <div className="contact_container">
		<div className="contact-box">
			<div className="contact_left">
			</div>
			<div className="contact_right">
				
				<h2 className="contact_h2">Update User</h2>
				<input type="text" className="contact_field" placeholder="Your Name"/>
				<input type="text" className="contact_field" placeholder="Your Surname"/>
				<input type="text" className="contact_field" placeholder="Your Phone"/>
				<input readOnly type="text" className="contact_field" placeholder="Your Email"/>
                <input type="text" className="contact_field" placeholder="Your Password"/>
                <input readOnly type="text" className="contact_field" placeholder="Your Balance"/>
				<button className="contact_btn" onClick={() => {
                    navigate('#')
                    alert("Başarıyla Güncellendi.")
                }}>Update</button>
				
				
			</div>
		</div>
	</div>
        <Footer/>
        </>
    )
}

export default UpdateUser