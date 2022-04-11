import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";

import Header from "./Component/Header/Header";
import Inventory from "./Component/Inventory/Inventory";
import Order from "./Component/Orders/Order";
import Shop from "./Component/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Order></Order>}></Route>
        <Route path='/inventory'element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
