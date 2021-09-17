
import './App.css';
import {useState} from "react";


function App() {

const [weight, setWeight] = useState("");
const [bottles, setBottles] = useState("");
const [time, setTime] = useState("");
const [gramsLeft, setGramsLeft] = useState(0);
const [male, setMale] = useState("");
const [female,setFemale] = useState("");



function calculate(e) {
  e.preventDefault();
  const litres = bottles * 0.33;
  const grams = litres * 8 * 4.5;
  const burning = weight / 10;
  setGramsLeft(grams - (burning * time));
  setMale(gramsLeft / (weight * 0.7));
  setFemale(gramsLeft / (weight * 0.6));

  


 
  

  
  

}


  return (
    <div id="container">
      
      <h2>Alcometer</h2>
      <form onSubmit={calculate}> 
        <div>
          <label>Weight</label>
        </div>
        <input type="number"
        value={weight}
        onChange={e => setWeight(e.target.value)}
        />
        <div>
          <label>Bottles</label>
        </div>
        <input type="number" 
        value={bottles}
        onChange={e => setBottles(e.target.value)}
        />
        <div>
          <label>Time</label>
        </div>
        <input type="number" 
        value={time}
        onChange={e => setTime(e.target.value)}
        />
        <div>
          <label>Gender</label>
        </div>
        <div>
          <label>Male</label>
        <input type="radio" 
        value={male}
        onChange={e => setMale(e.target.value)}
        />
        <output id="sukupuoli">{male}</output>
        </div>
        <div>
          <label>Female</label>
        <input type="radio" 
        value={female}
        onChange={e => setFemale(e.target.value)}
        />
        <output id="sukupuoli">{female}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>

    </div>

  );
}

export default App;
