import { useRef } from 'react'; 
import { Link } from 'react-router-dom'; 

import classes from './SignupForm.module.css'

function LoginForm (props)
{
    const usernameInputRef = useRef (); 
    const passwordInputRef = useRef (); 
    const confirmPasswordInputRef = useRef (); 

    function SubmitHandler (event)
    {
        event.preventDefault (); 

        const enteredEmail = usernameInputRef.current.value; 
        const enteredPassword = passwordInputRef.current.value; 
        const enteredConfirmPassword = confirmPasswordInputRef.current.value; 

        const signupData = 
        {
            email: enteredEmail, 
            password: enteredPassword, 
            confirmPassword: enteredConfirmPassword, 
        }; 

        props.OnLogin (signupData); 
    }

    return <div>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='username'>Email</label>
                <input type="email" required id="username" ref={usernameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type="password" required id="password" ref={passwordInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input type="confirm-password" required id="confirm-password" ref={passwordInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Login</button>
            </div>
        </form>
        <br />
        <p>Have an account?</p>
        <Link to="/login">Login</Link>
    </div>; 
}

export default LoginForm; 