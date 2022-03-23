import logo from './logo.svg';
import './App.css';
import Device from './Component/Device/Device';

function App() {
  return (
    <div className="App">
      <Device name='iphone' price='13000' color = 'red '></Device>
    </div>
  );
}

export default App;
