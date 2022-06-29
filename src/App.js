
import './App.css';

var cities=["Bengaluru  ","Mangaluru  ","Ballari  ","Vijayapura  ","Belagavi  ","Chikkamagaluru  ","Kalaburagi  ","Mysuru  ","Hosapete  ","Shivamogga  ","Huballi  ","Tumakuru  "];
cities.sort();
const App=()=> {
  
  return (
    cities.map((n)=>
    
     <h1>{n}</h1>)
    
  );
}

export default App;
