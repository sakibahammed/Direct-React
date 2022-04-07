import './App.css';
import React, { useEffect, useState } from "react";


function App() {
  return (
    <div className="App">
      <Loadpost></Loadpost>
      <District name="Comilla" special='moinamoti'></District>
      <District name="NoaKhali" special="bivaag"></District>
      <District name='barhmanBaria' special="joda kabar"></District>
      
    </div>
  );
}

function Loadpost(){
  const[post, setPost] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  },[])

  return(
    <div>
      <h1>Posts : {post.length}</h1>
      {
        post.map(post =><Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}


function Post(props){
  const style ={
    backgroundColor:'lightgray',
    // color:'white',
    border: '3px solid black',
    padding:'15px',
    margin:'20px'
  }
  return(
    <div style={style}>
      <h1>title: {props.title} </h1>
      <p>Body : {props.body}</p>
    </div>
  )
}


const districtStyle ={
  backgroundColor:'lightGray',
  // color:'white',
  margin:'20px',
  borderRadius:'20px',
  padding:'15px'
}
const District =(props) =>{
  const [power , setPower] = useState(1);
const boostPower =()=>{
  const newPower = power * 2;
  setPower(newPower)
}
 return(

  <div style={districtStyle}>
  <h1>Name : {props.name}
  </h1>
  <h4>Power : {power}</h4>
  <button onClick={boostPower}>Boost Power</button>
  <p>
    Speciaity : {props.special}
  </p>
  </div>
 )
}

export default App;
