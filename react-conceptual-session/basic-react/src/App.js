
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./Component/Card/Card";
import Navbar from "./Component/Navbar/Navbar";


function App() {
  const [guns , setGuns] = useState([]);
  useEffect(()=>{
    
  },[])

  return(
    <div className='app'>
      
      <Navbar></Navbar>
    </div>
  )
  
}

export default App;


//useState kno use kora hoi? 

