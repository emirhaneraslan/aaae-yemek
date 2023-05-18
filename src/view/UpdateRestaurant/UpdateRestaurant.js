import Footer from "../../components/FixedFooter/Footer"
import Navbar from "../../components/HomeNavbar/Navbar"
import './UpdateRestaurant.css'
import {useNavigate} from 'react-router-dom'


const UpdateRestaurant = () => {
    const navigate = useNavigate()

    return(
        <>
		
		<Navbar/>
        

        <div className="contact_container">
		<div className="contact-box">
			<div className="contact_left"></div>
			<div className="contact_right">
				
				<h2 className="contact_h2">Update Restaurant</h2>
				<input type="text" className="contact_field" placeholder="Your Restaurant Name"/>
				<input type="text" className="contact_field" placeholder="Your Tax Id"/>
				<input type="text" className="contact_field" placeholder="Your Restaurant Phone"/>
				<input readOnly type="text" className="contact_field" placeholder="Your Email"/>
                <input type="text" className="contact_field" placeholder="Your Password"/>
                <input type="text" className="contact_field" placeholder="Your Image Url"/>
                <input type="text" className="contact_field" placeholder="Your Adress"/>
                <textarea placeholder="Info" className="contact_field"></textarea>
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

export default UpdateRestaurant