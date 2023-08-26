import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faMale, faFemale, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbaricon.css"

const Navbar = () => {
  return (
    <div className="block lg:block bg-black text-white p-4 ">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-small py-4 text-blackish">
          <Link className="navbar__link relative flex items-center" href="#">
            <div className="mr-2">
              <FontAwesomeIcon icon={faHome} className="icon" />
            </div>
            HOME
          </Link>
          <Link className="navbar__link relative flex items-center" href="#">
            <div className="mr-2">
              <FontAwesomeIcon icon={faBars} className="icon" />
            </div>
            CATEGORIES
          </Link>
          <Link className="navbar__link relative flex items-center" href="#">
            <div className="mr-2">
              <FontAwesomeIcon icon={faMale} className="icon"/>
            </div>
            {`MEN'S`}
          </Link>
          <Link className="navbar__link relative flex items-center" href="#">
            <div className="mr-2">
              <FontAwesomeIcon icon={faFemale} className="icon" />
            </div>
            {`WOMEN'S`}
          </Link>
          <Link className="navbar__link relative flex items-center" href="#">
            <div className="mr-2">
              <FontAwesomeIcon icon={faShoePrints} className="icon" />
            </div>
            SHOES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
