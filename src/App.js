import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'; 
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_up from './Components/Sign_Up/Sign_Up';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import Notification from './Components/Notification/Notification';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import DoctorBook from './Components/DoctorCard/DoctorBook';

import ReviewForm from './Components/ReviewForm/ReviewForm';

import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() { 

  return ( 

<BrowserRouter> 

<Navbar/> 

<Routes> 

<Route path='/' element={<Landing_Page/>}/>

  <Route path='/login' element={<Login/>}/> 
  <Route path='/Sign_Up' element={<Sign_up/>}/> 
  <Route path='/finddoctor' element={<FindDoctorSearch/>}/>
  <Route path="/search/doctors" element={<DoctorBook/>} />
  <Route path='/InstantConsultation' element={<InstantConsultation/>}/>
  <Route path="/reviews" element={<ReviewForm/>} />
  <Route path="/profile-update" element={<ProfileForm/>} />
  <Route path="/reports" element={<ReportsLayout/>} />

 

</Routes> 
<Notification/>

</BrowserRouter> 

 

   

  ); 

} 

 

export default App; 