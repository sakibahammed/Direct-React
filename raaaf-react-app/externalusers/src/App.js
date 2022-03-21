import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
      
    </div>
  );
}

const ExternalUser = () =>{
  // const [] = 
  const [users , setUsers] = useState([]) //default value or kono kichu na thakle ekta empty array


  // useEffect(()=>{},[])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  // [ ]dependency


  return(
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name ={user.name} email = {user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border:'5px solid maroon',margin:'20px',borderRadius:'20px'}} >
      <h3>Name :{props.name} </h3>
      <h4>Email : {props.email}</h4>
    </div>
  )
}



export default App;
