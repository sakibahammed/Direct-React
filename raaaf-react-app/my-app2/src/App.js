import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel' , 'bappraj','kuber','salman saah','riyaz','anowar'];

  nayoks.push('jashim')

  const singers =  [
    {name : 'Dr. Mahfuzur' , job: 'Singer'},
    {name : 'Dr. Mahfuzur' , job: 'Singer'},
    {name : 'Agun' , job : 'sopno'},
    {name : 'shuvro' , job : 'pathor'}
  ]
  return(
   <div className="App">
     {/* {
       nayoks.map(nayok =><li> {nayok}</li>)
     }

     {
       nayoks.map(nayok => <Person name = {nayok}></Person>)
     } */}

     {
       singers.map(singer => <Person name={singer.name}></Person>)
     }



      {/* <Person name={nayoks[0]}></Person>
    <Person name={nayoks[1]}></Person>
    <Person name={nayoks[2]}></Person> */}
   </div>
  )
}



function Person (props){
  return(
    <div>
      <h3> {props.name}</h3>
      <p></p>
    </div>
  )
}

export default App;
