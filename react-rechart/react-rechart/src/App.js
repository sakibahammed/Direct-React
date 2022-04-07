import logo from "./logo.svg";
import "./App.css";
import Mylinechart from "./Component/Mylinechart/Mylinechart";
import SpecialChart from "./Component/SpecialChart/SpecialChart";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 },reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip)
 });

  return (
    <div className="">
      <div></div>
      <Mylinechart></Mylinechart>
      <SpecialChart></SpecialChart>
      <animated.h1 style={props}>hello</animated.h1>
    </div>
  );
}

export default App;
