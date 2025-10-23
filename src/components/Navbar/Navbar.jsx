import React, { useRef, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import {logout} from '../../firebase';

const Navbar = () => {
  const navref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navref.current.classList.add("nav-dark");
      } else {
        navref.current.classList.remove("nav-dark");
      }
    };
 
    window.addEventListener("scroll", handleScroll);

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar" ref={navref}>
      <div className="navbar-left">
        <a href="https://net2025.cc/home" target="_blank" rel="noopener noreferrer">
          Free Movies
        </a>

        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search} alt="search" className="icons" />
        <p>Children</p>
        <img src={bell} alt="bell" className="icons" />

        <div className="navbar-profile">
          <img src={profile} alt="profile" className="profile" />
          <img src={caret} alt="caret" className="careticon" />

          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
