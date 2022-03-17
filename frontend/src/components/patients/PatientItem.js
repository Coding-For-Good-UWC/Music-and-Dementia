import Card from '../ui/Card';
import classes from './PatientItem.module.css'; 

function PatientItem (props)
{
    return (
    <li className={classes.item}>
        <Card>
            <h3>{props.id}</h3>
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>{props.birthdate}</p>
            <p>{props.ethnicity}</p>
            <p>{props.language}</p>
            <p>{props.gender}</p>

            <button>View Patient</button>

        </Card>
    </li>);
}

export default PatientItem; 