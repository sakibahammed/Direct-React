
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Friend from './Components/Friend/Friend';
import Friends from './Components/Friends/Friends';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/friends' element={<Friends></Friends>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
