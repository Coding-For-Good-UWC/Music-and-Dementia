import { Link } from 'react-router-dom'; 
import classes from './MainNavigation.module.css'; 

function MainNavigation (props)
{
    return <header className={ classes.header }>
        <div className={ classes.logo }>Project FUXI</div>
        <nav>
            <ul>
                {/* <li>
                    <Link to="/">Show Patients</Link>
                </li> */}
                <li>
                    <Link to="/">New Patient</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation; 