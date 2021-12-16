import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Database test
        </h1>
        <p id="test">Data Not Loaded</p>
        <button onClick={()=>{
          fetch("http://127.0.0.1:5000/api/read_db")
          .then(res => res.json())
          .then(data => {
            var text = document.getElementById("test");
            text.innerHTML = "Welcome, " + data["name"];
          })
        }}>Read From Database</button>

        <button onClick={()=>{
          fetch("http://127.0.0.1:5000/api/write_db")
        }}>Write To Database</button>

      </header>
    </div>
  );
}

export default App;
