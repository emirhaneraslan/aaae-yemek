import './Foods.css'
import Navbar from '../../components/HomeNavbar/Navbar'
import Card from '../../components/Card3/Card'
import {useNavigate} from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import jpgOne from '../../image/2.jpg'
import jpgTwo from '../../image/3.jpg'
import jpgThree from '../../image/5.jpg'
import jpgFour from '../../image/8.jpg'


const Foods = () => {
    const navigate = useNavigate()
    return(
        <>
        <Navbar/>

        <div className="adminpage-card-body">
        <div class="adminpage_card_container">

            <h2 className="text-center">Restaurant Name</h2>
        <Card picture_url={jpgOne} card_title={"Sucuklu pizza"} card_text={`Food Info: Dünyanın en güzel lezzetlerinden Food Price: 250 Food Category: Fast-Food`} button_text={"Add to basket"}  button_onClick={()=>{
            alert("Sepete Başarıyla Eklendi.")
        }}/>

        <Card picture_url={jpgTwo} card_title={"İskender"} card_text={`Food Info: Dünyanın en güzel lezzetlerinden Food Price: 150 Food Category: Meat`}  button_text={"Add to basket"}  button_onClick={()=>{
            alert("Sepete Başarıyla Eklendi.")
        }}/>

        <Card picture_url={jpgThree} card_title={"Adana Kebap"} card_text={`Food Info: Dünyanın en güzel lezzetlerinden Food Price: 350 Food Category: Meat`}  button_text={"Add to basket"}  button_onClick={()=>{
            alert("Sepete Başarıyla Eklendi.")
        }}/>

        <Card picture_url={jpgFour} card_title={"Karışık Pızza"} card_text={`Food Info: Dünyanın en güzel lezzetlerinden Food Price: 450 Food Category: Fast-Food`}  button_text={"Add to basket"}  button_onClick={()=>{
            alert("Sepete Başarıyla Eklendi.")
        }}/>
        
        
            </div>
        </div>

        <Footer/>
        
        </>
    )
}

export default Foods