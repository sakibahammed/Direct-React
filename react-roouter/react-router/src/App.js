import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Total from "./Components/Total/Total";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/total" element={<Total></Total>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        {/* ekhane * diye bujhano hoice j upor er gula chara onno kichu dele eta dekhabe note eta always niche dete hobe */}

      </Routes>
    </div>
  );
}

export default App;
