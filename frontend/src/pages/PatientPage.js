import classes from './PatientPage.module.css'; 
import { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";

function PatientPage ()
{
    // const [isLoading, setIsLoading] = useState (true); 
    // const [loadedPatients, setLoadedPatients] = useState([]); 
    
    // useEffect (() => 
    // {
    //     setIsLoading (true); 

    //     fetch ('')
    //         .then (response => 
    //         {
    //             return response.json (); 
    //         }).then (data => 
    //         {
    //             const patients = []; 

    //             for (const key in data)
    //             {
    //                 const patient = 
    //                 {
    //                     id: key, 
    //                     ...data[key]
    //                 }; 

    //                 patients.push (patient); 
    //             }

    //             setIsLoading (false); 
    //             setLoadedPatients (patients); 
    //         }); 
    // }, [])

    // if (isLoading)
    // {
    //     return <section>
    //         <p>Loading...</p>
    //     </section>; 
    // }

    const { id } = useParams (); 

    return (
        <section>
            <h1>Patient Page</h1>
            <p>{id}</p>
        </section>
    ); 
}

export default PatientPage; 



// import { useParams } from "react-router-dom";
// import { useState, useEffect } from 'react'; 

// function PatientPage ()
// {
//     const { id } = useParams (); 

//     return <div>
//         <h1>Patient Page</h1>
//         <p>{id}</p>
//     </div>; 
// }

// export default PatientPage; 