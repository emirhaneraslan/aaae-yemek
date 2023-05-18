import {Routes,Route} from 'react-router-dom'
import Home from './view/Home/Home';
import SignIn from './view/SignIn/SignIn';
import SignUp from './view/SignUp/SignUp';
import RestaurantSignUp from './view/RestaurantSignUp/SignUp';
import ForgotPassword from './view/ForgotPassword/ForgotPassword';
import Restaurant from './view/Restaurant/Restaurant';
import Foods from './view/Foods/Foods';
import UpdateUser from './view/UpdateUser/UpdateUser';
import UpdateRestaurant from './view/UpdateRestaurant/UpdateRestaurant';
import AddFood from './view/AddFood/AddFood';
function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/restaurantsignup' element={<RestaurantSignUp/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/restaurant' element={<Restaurant/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/updateuser' element={<UpdateUser/>}/>
        <Route path='/updaterestaurant' element={<UpdateRestaurant/>}/>
        <Route path='/addfood' element={<AddFood/>}/>
        </Routes>
        
      
    </div>
  );
}

export default App;
