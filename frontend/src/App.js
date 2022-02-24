import { Routes, Route } from 'react-router-dom'; 

import LandingPage from './pages/LandingPage'; 
import LoginPage from './pages/LoginPage'; 
import SignupPage from './pages/SignupPage'; 
import CaregiverDashboard from './pages/CaregiverDashboard'; 
import PatientPage from './pages/PatientPage'; 
import PatientRegistration from './pages/PatientRegistration'; 

function App() 
{
  return <div>
    <Routes>
      <Route path='/' element={ <LandingPage /> } />
      <Route path='/login' element={ <LoginPage /> } />
      <Route path='/signup' element={ <SignupPage /> } />
      <Route path='/dashboard' element={ <CaregiverDashboard /> } />
      <Route path='/patient' element={ <PatientPage /> } />
      <Route path='/registerPatient' element={ <PatientRegistration /> } />
    </Routes>
  </div>; 
}

export default App;