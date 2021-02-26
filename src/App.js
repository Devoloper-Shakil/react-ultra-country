import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countys,setCountys]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then (res=>res.json())
    .then (data=>setCountys(data));
  }
  
  )
  return (
    <div className="App">
      
        <h1> Total County :{countys.length}</h1>
        {
          countys.map(county=><Country key={county.name} country={county} ></Country>)
        }
       
        
          
     
    </div>
  );
}

export default App;
