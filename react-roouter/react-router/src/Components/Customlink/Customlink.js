import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color:match? 'red' : 'black', textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
        {/* {match && " (active)"} eta soraai dele ui theke about likha ta chole jaabe */}
      </div>
    );
  }

export default CustomLink;