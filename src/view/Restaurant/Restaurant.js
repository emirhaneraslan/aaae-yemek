import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import HomeNavbar from "../../components/HomeNavbar/Navbar"
import './Restaurant.css'
import {useNavigate} from 'react-router-dom'
import jpgOne from '../../image/1.jpg'
import jpgTwo from '../../image/6.jpg'
import jpgThree from '../../image/7.jpg'
import jpgFour from '../../image/10.jpg'




const Restaurant = () => {

  const navigate = useNavigate()

    return(
        <>
         <HomeNavbar/>
        <div className="container">
            <div className="row">
                    <>
                    <Card picture_url={jpgOne} card_title={"Konyalı Hanedan"} button_onClick={()=>{
                        navigate(`/foods`) 
                    }}/>

                    <Card picture_url={jpgTwo} card_title={"Pizzacı Ali Usta"} button_onClick={()=>{
                        navigate(`/foods`) 
                    }}/>

                    <Card picture_url={jpgThree} card_title={"Saruhan"} button_onClick={()=>{
                        navigate(`/foods`) 
                    }}/>

                    <Card picture_url={jpgFour} card_title={"Beykoz"} button_onClick={()=>{
                        navigate(`/foods`) 
                    }}/>
                    </>
                  
                
                
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Restaurant