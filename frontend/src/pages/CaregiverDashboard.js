import MainNavigation from "../components/layout/MainNagivation";
import PatientList from "../components/patients/PatientList"; 

const DUMMY_DATA = [
  {
    id: 'testpatient1',
    name: 'Test Patient 1',
    age: '80', 
    image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80', 
    reaction: '6.8'
  },
  {
    id: 'testpatient2',
    name: 'Test Patient 2',
    age: '86', 
    image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80', 
    reaction: '8.4'
  }
];

function CaregiverDashboard ()
{
    return (<div>
        <MainNavigation />
        <PatientList patients={ DUMMY_DATA } />
    </div>); 
}

export default CaregiverDashboard; 