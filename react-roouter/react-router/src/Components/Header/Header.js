import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../Customlink/Customlink";
const Header = () => {
  return (
    <div>
      <h1>Welcome to my fancy routing website routing !</h1>
      <nav>
          {/* <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">about</CustomLink>
          <CustomLink to="/friends">friend</CustomLink> */}

          <Link to='/'>Home</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/about'>About</Link>
          <Link to='/posts'>Post</Link>
        

        {/* link anchor er against e use kora hoice jaate reload er jhamela na thake */}
      </nav>
    </div>
  );
};

export default Header;
