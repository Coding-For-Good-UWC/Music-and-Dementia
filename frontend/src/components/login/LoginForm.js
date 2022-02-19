import { useRef } from 'react'; 
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './LoginForm.module.css'
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
// import styles from './LoginForm.module.css'; 

function LoginForm (props)
{
    const usernameInputRef = useRef (); 
    const passwordInputRef = useRef (); 

    function SubmitHandler (event)
    {
        event.preventDefault (); 

        const enteredEmail = usernameInputRef.current.value; 
        const enteredPassword = passwordInputRef.current.value; 

        const loginData = 
        {
            email: enteredEmail, 
            password: enteredPassword
        }; 

        props.OnLogin (loginData); 
    }

    return <div>
    <Container>
    <form className={classes.form} onSubmit={SubmitHandler}>

<Row className="justify-content-md-center" fluid="md">
    {/* <label htmlFor='username'>Email</label> */}
    <input type="email" placeholder = "Email" required id="username" ref={usernameInputRef} />

</Row>



<Row className="justify-content-md-center">
       {/* <label htmlFor='password'>Password</label> */}
       <input type="password" placeholder = "Password" required id="password" ref={passwordInputRef} />


</Row>
<Row className="justify-content-md-center">
    <Col xs lg="2" id={classes.logincolumn}>    
    <button>Login</button>
</Col>
</Row>

</form>
</Container>
    <br />
    <p>Don't have an account?</p>
    <Link to="/signup">Signup</Link>
</div>; 
}

export default LoginForm; 
 <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/> 