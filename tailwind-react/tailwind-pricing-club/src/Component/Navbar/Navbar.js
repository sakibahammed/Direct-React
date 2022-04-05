import React from "react";
import Link from "../Link/Link";
import { MenuAlt1Icon, MenuIcon, XIcon } from "@heroicons/react/solid"
import { useState } from "react";


const Navbar = () => {
    const [open , setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", Link: "/home" },
    { id: 2, name: "Shop", Link: "/shop" },
    { id: 3, name: "Deals", Link: "/deals" },
    { id: 4, name: "Coupons", Link: "/coupons" },
    { id: 5, name: "Contacts", Link: "/contact" },
  ];
  return (
    <nav className='bg-indigo-200'>
        <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
           {open?<XIcon></XIcon>:<MenuIcon></MenuIcon>}
        </div>
      <ul className={`md:flex justify-center md:static w-full bg-indigo-200 absolute duration-500 ease-in ${open ? 'top-6 ':'top-[-120px]'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
