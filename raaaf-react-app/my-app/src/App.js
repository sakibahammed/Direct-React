import logo from './logo.svg';
import './App.css';

const name = 'Sakib Ahammed';
let age = 22;
const address = 'haziganj';

const singer = {name : 'Dr Mahfuz' , job : 'Singer'}
const singer2 = {name : 'Eva Rahaman' , job :'singer'}


const singerStyle = {
  color:'red',
  backgroundColor:'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from react</h1>
        <h2>JSX</h2>
        <p style={singerStyle}>
          REdit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello form xml</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eearn React
        </a>
          <div className="container">
            <h3>Hello dude react.. how r u?</h3>
          </div>

          <div className="music">
            <p>Name : {name}</p>
          </div>
          <div>
                <p>age : {age}</p>
              </div>
              <div>
        <h4>{address}</h4>


        <p>Name : {singer.name} Job : {singer.job}</p>
        <p>Name : {singer2.name}</p>
        <p>job : {singer2.job}</p>
      </div>
              </header>

      

    </div>

    

    
  );
}

export default App;
