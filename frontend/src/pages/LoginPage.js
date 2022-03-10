import { useNavigate } from 'react-router-dom'; 
import classes from './LoginPage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import LoginForm from "../components/login/LoginForm";

function LoginPage ()
{
    const navigate = useNavigate (); 

    function LoginHandler (loginData)
    {
        fetch ('', 
        {
            method: "POST", 
            body: JSON.stringify (loginData), 
            headers: { "Content-Type": "application/json" }
        }).then (() => 
        {
            navigate('/', { replace: true })
        }); 
    }

    return <section>
        <Container>
        <Row className="justify-content-md-center" fluid="md">
        <Col id={classes.heading}>
        <h1>Login</h1>
        </Col>
        </Row>
        </Container>
        <LoginForm OnLogin={LoginHandler} />    </section>; 
}

export default LoginPage; 
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin="anonymous"
/> 