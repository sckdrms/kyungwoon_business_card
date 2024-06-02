// NavbarComponents.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext.js';

import '../css/NavbarComponents.css';
import logo from '../img/logo.png';

const NavbarComponent = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { auth, logout } = useAuth();

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <nav className='nav-container'>
      <a href="/">
        <img src={logo} className='logo' alt="logo" />
      </a>

      <ul className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
        <li onClick={toggleSidebar}><a href="/#"><svg style={{margin :'0px 49vw'}} xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
        <li onClick={toggleSidebar}><Link to="/">Home</Link></li>
        <li onClick={toggleSidebar}><Link to="/Information">Information</Link></li>
        <li onClick={toggleSidebar}><Link to="/namecard">namecard</Link></li>
      </ul>

      <ul>
        <li className='hideOnMobile'><Link to="/">Home</Link></li>
        <li className='hideOnMobile'><Link to="/Information">Information</Link></li>
        <li className='hideOnMobile'><Link to="/namecard">namecard</Link></li>
        {auth.isLoggedIn && <li className='loginli'>{auth.username}님</li>}
        <li>
          {auth.isLoggedIn ? (
            <button className='loginbutton1' onClick={() => {
              logout();
            }}>Log out</button>
          ) : (
            <button className='loginbutton1'> <Link to="/login">Log in</Link></button>
          )}
        </li>
        <li className='hideOnPC' onClick={toggleSidebar}><a href="/"><svg style={{margin :'-10px 0px'}} xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
