import logo from './logo.svg';
import './App.css';
import Device from './Component/Device/Device';
import Watch from './Component/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='iphone' price='13000' color = 'red '></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
