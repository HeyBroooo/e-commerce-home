import Link from "next/link";
import React from "react";
import { IoMdHome, IoMdPerson } from "react-icons/io";

import "../styles/navbaricon.css"

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link legacyBehavior href="#">
            <a className="mr-2 md:mr-10  icon-box">
              <img src="/shoplocation.png" alt="Home" width="55" height="55" />
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className="mr-2 md:mr-10 icon-box">
              <img src="/track.png" alt="Home" width="55" height="55" />
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className="mr-2 md:mr-10 icon-box">
              <img src="/sales.png" alt="Home" width="55" height="55" />
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className="mr-2 md:mr-10 icon-box">
              <img src="/bitcoin.png" alt="Home" width="55" height="55" />
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className="mr-2 md:mr-10 icon-box">
              <img src="/sale.png" alt="Home" width="55" height="55" />
            </a>
          </Link>
        
      </nav>
    </div>
 
  </header>
  )
}

export default Navbar;
