import logo from "./logo.svg";
import "./App.css";
import CardGroup from "./Components/CardGroup/CardGroup";
import { Button, Spinner } from "react-bootstrap";
import Cardgroup2 from "./Components/Cardgroup2/Cardgroup2";

function App() {
  return (
    <div className="App">
      <h1>Using react bootstrap</h1>  
      <Button variant='danger'>My Button</Button>
      <br/>
      <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
   <Cardgroup2></Cardgroup2> 
    </div>
  );
}

export default App;
