import './App.css';
import {useState} from 'react';

function App() {
  let[value,setvalue] = useState(10);
  let[color,setcolor] = useState('cold');
  let incre = () =>{
    const new_value = value + 1;
    if(new_value >= 15){
      setcolor('hot')
      if(new_value == 25){
        window.confirm("Temperature is very High");
      }
    }
    setvalue(new_value);
  }

  let decre = () =>{
    const new_value = value - 1;
    if(new_value < 15){
      setcolor('cold')
      if(new_value == 8){
        window.confirm("wohhooo!.Weather is coldy..")
      }
    }
    setvalue(new_value);
  }
  return (
    <div className="App">
      <div className="box">
          <h3>Change BG With Temperature</h3>
          <hr></hr>
          <br></br>
          <br></br>
          <div className="circle">
              <h1 className={`${color}`}>{value}°C</h1>
              
          </div>
          <br></br>
          <br></br>
          <hr></hr>

          <button onClick={incre} >Plus + </button>
          <button onClick={decre} style={{margin:'8px'}}>Minus - </button>

      </div>
    </div>
  );
}

export default App;
