import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
    <Person name="mustafixz"></Person>
    <Person name = 'rubel' nayka ="moushumi"></Person>
    <p>Rock mama React mama</p>
    <Girl name = "bou"></Girl>
    <Girl></Girl>

    <Friend movie ="shingum" phone = '1032738'></Friend>
    <Friend movie = " 3 idiots" phone = '01775023405'></Friend>
    <h1>Hey mama hey</h1>
    </div>

    

    
  );
}

function Person(props){
  
  return (
    <div className = 'person'>
    <h1>{props.name}</h1>
    <p>Profession : {props.nayka}</p>
  </div>
  )
}



function Girl(props){
 
  return(
    <div className="person">
      <h1>NAzifa TAsnim</h1>
      <p>Job : kichu kore na</p>
      
    </div> 
  )
}



function Friend (props){
  console.log(props)
  return(
    <div>
      <h3>Name : Ajay Devgun</h3>
      <p>Job : Maramari</p>
      <p>phone : {props.phone}</p>
      <p>Movie  : {props.movie}</p>
    </div>
  )
}

export default App;



// react e function er first part ta Capital hobe

//react e function k ekta component hesebe dhora hoi


/* 
Summary : normal function er moto react e component banano jaai. dorkar e reuse kora jaai


component jkhon banaai tokhon chaile function e dynamic vabe data pathano jaai. eta props diye pathaay... evabe e similar in look different in data banano hoi... data pathay props diye



*/