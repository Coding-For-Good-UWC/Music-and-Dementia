import { useNavigate } from 'react-router-dom'; 

import SignupForm from "../components/signup/SignupForm";

function SignupPage ()
{
    const navigate = useNavigate (); 

    function SignupHandler (signupData)
    {
        fetch ('', 
        {
            method: "POST", 
            body: JSON.stringify (signupData), 
            headers: { "Content-Type": "application/json" }
        }).then (() => 
        {
            navigate('/', { replace: true })
        }); 
    }

    return <section>
        <h1>Signup</h1>
        <SignupForm OnLogin={SignupHandler} />
    </section>; 
}

export default SignupPage; 