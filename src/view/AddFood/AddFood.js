import Navbar from '../../components/HomeNavbar/Navbar'

import DataButton from '../../components/DataButton/DataButton'
import DataInput from '../../components/DataInput/DataInput'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import {useNavigate} from 'react-router-dom'

import './AddFood.css'



const AddFood = () => {
    const navigate = useNavigate()

    return(
        <>
        <Navbar/>

<br/>
<br />
        


        <div className='container mb-5'>
            <div className="row">
            <b><h2 className='text-center'>CREATE FOOD</h2></b>
            <br />
            <br />
            <br />
                <div className="col">
                    
                </div>
                
                <div className="col-6">
                    <h2>Choose a category</h2>
                </div>
                <div className="col-3">
        <div className="createsurvey_div_select">
            <select className='createsurvey_select' name="format" id="format">
                <option selected disabled>Please Choose</option>
                
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
                <option value="4">Category 4</option>
                <option value="5">Category 5</option>
                <option value="6">Category 6</option>
                <option value="7">Category 7</option>
                <option value="8">Category 8</option>
            </select>
        </div>
                </div>
                
                <div className="col"></div>
            </div>
        </div>

        

        <div className="container">
            <div className="row">
                
                <div className="col-1">

                </div>
                <div className="col-10">
                <form>

                <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col"></div>
                <div className="col-10">
                    <DataInput label_text={"Write Food Name"}/>
                    <DataInput label_text={"Write Food Price"}/>
                    <DataInput label_text={"Write Food Image Url"}/>
                    <textarea placeholder="Food Info" className="contact_field"></textarea>
                    <b>Listelensin mi</b>   <ToggleButton />
                </div>
                
                <div className="col"></div>
            </div>
            </div>
                    
                     
                        
                        
                     
                    <div className="row">
                <div className="col"></div>
                <div className="col-9">
                    <DataButton button_text={"submit"} />
                </div>
                <div className="col"></div>
            </div>
                </form>
                </div>
                <div className="col-1">

                </div>
            </div>
            
        </div>


        </>
    )
}

export default AddFood
