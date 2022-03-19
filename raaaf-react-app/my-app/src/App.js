import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
    <Person></Person>
    <Person></Person>
    <p>Rock mama React mama</p>
    <Girl></Girl>
    <Girl></Girl>
    <h1>Hey mama hey</h1>
    </div>

    

    
  );
}

function Person(){
  return (
    <div className = 'person'>
    <h1>Shakib Al hasan</h1>
    <p>Profession : Cricketer</p>
  </div>
  )
}



function Girl(){
  return(
    <div className="person">
      <h1>NAzifa TAsnim</h1>
      <p>Job : kichu kore na</p>
    </div> 
  )
}

export default App;



// react e function er first part ta Capital hobe

//react e function k ekta component hesebe dhora hoi


/* 
Summary : normal function er moto react e component banano jaai. dorkar e reuse kora jaai
*/