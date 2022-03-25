import logo from './logo.svg';
import './App.css'; // import e ./ maane seyy ek e folder theke import kortece
import Cosmetic from './Components/Cosmetics/Cosmetic';
import Shoes from './Components/Showes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetic></Cosmetic>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
