import { Route, Routes } from "react-router-dom";
import "./App.css";
import Friend from "./Components/Friend/Friend";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import FriendDetail from "./Components/FriendDetail/FriendDetail";
import Post from "./Components/Post/Post";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/friend/:friendId"
          element={<FriendDetail></FriendDetail>}
        ></Route>
        <Route path="/posts" element={<Post></Post>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
