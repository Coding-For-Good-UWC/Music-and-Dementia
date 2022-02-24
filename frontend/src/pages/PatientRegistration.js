import { useNavigate } from 'react-router-dom'; 

import PatientRegistrationForm from "../components/patientRegistration/PatientRegistrationForm";

function PatientRegistration ()
{
    const navigate = useNavigate (); 

    function RegisterHandler (patientData)
    {
        console.log (patientData); 
        
        fetch ('', 
        {
            method: "POST", 
            body: JSON.stringify (patientData), 
            headers: { "Content-Type": "application/json" }
        }).then (() => 
        {
            navigate('/', { replace: true })
        }); 
    }

    return <section>
        <h1>Register Patient</h1>
        <PatientRegistrationForm OnRegister={RegisterHandler} />
    </section>; 
}

export default PatientRegistration; 