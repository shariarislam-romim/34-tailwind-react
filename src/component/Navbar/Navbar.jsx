import { Menu, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

// import React from 'react';
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className="flex justify-between mx-10 mt-4">
          <span className="flex" onClick={() => setOpen(!open)}>
            {open ? 
              <X className="md:hidden"></X> :
              <Menu className="md:hidden"></Menu>
              }
            
            <ul className={`
              md:hidden absolute bg-amber-200 duration-1000
              ${open ? 'top-8' : '-top-40'}
              `}>
              {links}
            </ul>
         <h3 className="ml-4">My Navbar</h3>
          </span>
          
          <ul className="md:flex hidden">
            {
            links
          }
          </ul>

            {/* <ul className="flex justify-around">
              {
                navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
              }
            </ul> */}

            {/* <ul className="flex">
                <li className="mr-10"><a href="">Home</a></li>
                <li className="mr-10"><a href="">About</a></li>
                <li className="mr-10"><a href="">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;