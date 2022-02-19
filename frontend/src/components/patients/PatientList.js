import PatientItem from './PatientItem';
import classes from './PatientList.module.css'; 

function PatientList (props)
{
    return (<ul className={classes.list}>
        {props.patients.map (patient => (
            <PatientItem
                id={patient.id}
                name={patient.name}
                age={patient.age}
                image={patient.image}
                reaction={patient.reaction}
            />
        ))}
    </ul>); 
}

export default PatientList; 