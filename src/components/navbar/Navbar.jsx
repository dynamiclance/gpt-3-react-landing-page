import React from 'react';
import {FaAlignRight, FaTimes  } from 'react-icons/fa';
import { useState } from 'react';

import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Menu = () => (
  <>
    
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">what is gpt</a></p>
      <p><a href="#possibility">Open Ai</a></p>
      <p><a href="#features">Case studies</a></p>
      <p><a href="#blog">Library</a></p>
    
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>

      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links-container">
           <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>sign in</p>
        <button type='button'>Sign Up</button>
      </div>

     <div className="gpt3__navbar-menu">
        {
          toggleMenu 
          ? <FaTimes onClick={() => setToggleMenu(false)} color="fff" />
          : <FaAlignRight  onClick={() => setToggleMenu(true)} color="fff"  />
        }


        {
          toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                </div>

                <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div> 
          )
        }

     </div>
    </div>
  )
}

export default Navbar   