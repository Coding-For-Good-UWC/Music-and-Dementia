import MainNavigation from "../components/layout/MainNagivation";
import PatientList from "../components/patients/PatientList"; 
import { useState, useEffect } from 'react'; 

// const DUMMY_DATA = [
//   {
//     id: '1', 
//     name: 'tuser', 
//     location: 'SG', 
//     birthdate: '2000-00-00', 
//     ethnicity: 'Hokkien', 
//     language: 'English', 
//     gender: 'Male', 
//   }, 
//   {
//     id: '2', 
//     name: 'tuser2', 
//     location: 'SG', 
//     birthdate: '2001-00-00', 
//     ethnicity: 'Hokkien', 
//     language: 'Chinese', 
//     gender: 'Female', 
//   }
// ];

function CaregiverDashboard ()
{
    const [isLoading, setIsLoading] = useState (true); 
    const [loadedPatients, setLoadedPatients] = useState([]); 
    
    useEffect (() => 
    {
        setIsLoading (true); 

        fetch ('http://127.0.0.1:5000/api/db')
            .then (response => 
            {
                return response.json (); 
            }).then (data => 
            {
                console.log (data); 

                const patients = []; 

                // for (const key in data)
                // {
                    const patient = 
                    {
                        birth: data.birth, 
                        ethnicity: data.ethnicity, 
                        gender: data.gender, 
                        language: data.language, 
                        location: data.location, 
                        name: data.name

                        // id: key, 
                        // ...data[key]
                    }

                    patients.push (patient); 
                // }

                setIsLoading (false); 
                setLoadedPatients (patients); 
            }); 
    }, [])

    if (isLoading)
    {
        return <section>
            <p>Loading...</p>
        </section>; 
    }

    return (
        <section>
            <MainNavigation />
            <PatientList patients={ loadedPatients } />
        </section>
    ); 
}

export default CaregiverDashboard; 