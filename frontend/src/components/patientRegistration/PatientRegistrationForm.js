import { useRef } from 'react'; 
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import classes from './PatientRegistrationForm.module.css'; 
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
// import styles from './LoginForm.module.css'; 

function PatientRegistrationForm (props)
{

    const nameInputRef = useRef (); 
    const locationInputRef = useRef (); 
    const birthdateInputRef = useRef (); 
    const genderInputRef = useRef (); 
    const ethnicityInputRef = useRef (); 
    const languageInputRef = useRef (); 
    
    function SubmitHandler (event)
    {
        event.preventDefault (); 
        
        const enteredName = nameInputRef.current.value; 
        const enteredLocation = locationInputRef.current.value; 
        const enteredBirthdate = birthdateInputRef.current.value; 
        const enteredGender = genderInputRef.current.value; 
        const enteredEthnicity = ethnicityInputRef.current.value; 
        const enteredLanguage = languageInputRef.current.value; 
        
        const patientData = 
        {
            name: enteredName, 
            location: enteredLocation, 
            birthdate: enteredBirthdate, 
            gender: enteredGender, 
            ethnicity: enteredEthnicity, 
            language: enteredLanguage
        }; 

        props.OnRegister (patientData); 
    }

    return <div>
    <Container>
    <form className={classes.form} onSubmit={SubmitHandler}>

<Row className="justify-content-md-center" fluid="md">
    {/* <label htmlFor='username'>Email</label> */}
    <input type="text" placeholder = "Name" required id="name" ref={nameInputRef} />
</Row>


<Row className="justify-content-md-center" fluid="md">
    {/* <label htmlFor='username'>Email</label> */}
    <input type="text" placeholder = "Location" required id="location" ref={locationInputRef} />
</Row>

<Row className="justify-content-md-center" fluid="md">
    {/* <label htmlFor='username'>Email</label> */}
    <input type="date" placeholder = "Birthdate" required id="birthdate" ref={birthdateInputRef} />
</Row>

<Row className="justify-content-md-center" fluid="md">
    {/* <label htmlFor='username'>Email</label> */}
    {/* <input type="text" placeholder = "Gender" required id="gender" ref={usernameInputRef} /> */}
    <select id="gender" name="Gender" required ref={genderInputRef}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
</Row>

<Row className="justify-content-md-center">
       {/* <label htmlFor='password'>Password</label> */}
       <input type="text" placeholder = "Ethnicity" required id="ethnicity" ref={ethnicityInputRef} />
</Row>

<Row className="justify-content-md-center">
       {/* <label htmlFor='password'>Password</label> */}
       <input type="text" placeholder = "Language" required id="language" ref={languageInputRef} />
</Row>

<Row className="justify-content-md-center">
    <Col xs lg="2" id={classes.logincolumn}>    
    <button>Login</button>
</Col>
</Row>

</form>
</Container>
</div>; 
}

export default PatientRegistrationForm; 

 <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/> 