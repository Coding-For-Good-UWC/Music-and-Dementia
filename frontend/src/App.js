import { Routes, Route } from 'react-router-dom'; 

// import logo from './logo.svg';
import './App.css';

import LandingPage from './pages/LandingPage'; 
import LoginPage from './pages/LoginPage'; 
import SignupPage from './pages/SignupPage'; 
import PatientRegistration from './pages/PatientRegistration'; 
import CaregiverDashboard from './pages/CaregiverDashboard'; 
import PatientPage from './pages/PatientPage'

function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/signup' element={ <SignupPage /> } />
        <Route path='/register' element={ <PatientRegistration /> } />
        <Route path='/dashboard' element={ <CaregiverDashboard /> } />
        <Route path='/patient' element={ <PatientPage /> } />
      </Routes>
    </div>
  );
}

export default App;
