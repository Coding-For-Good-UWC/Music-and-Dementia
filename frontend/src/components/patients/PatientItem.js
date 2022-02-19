import Card from '../ui/Card';
import classes from './PatientItem.module.css'; 

function PatientItem (props)
{
    return (
    <li className={classes.item}>
        <Card>
            <img src={props.image} alt={props.name} className={classes.image}></img>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <p>{props.id}</p>
            <h2>{props.reaction}</h2> {/* Place on sliding scale between 0 and 10 */}
            <button>View Patient</button>
        </Card>
    </li>);
}

export default PatientItem; 