import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import logo from '../assets/logo.svg';
import avatar from '../assets/avatar.svg';

export default function Main() {
  return (
    <div className="main-container">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Design4You" className="logo" />
        </Link>
        <nav className="header-menu">
          <Link to="/">
            <p className="header-title">About</p>
          </Link>
          <Link>
            <p className="header-title">Portfolio</p>
          </Link>
          <Link>
            <p className="header-title">Skills</p>
          </Link>
          <Link>
            <p className="header-title">Contact</p>
          </Link>
        </nav>
      </header>

      <div className="container-about">
        <img src={avatar} alt="foto Perfil" className="perfil-image" />
        <div className="container-about-block">
          <p className="header-title">Deyvison de Paiva Penha</p>
          <p className="sub-title">Full-Stack Developer</p>
          <p className="article">Computer engineer, passionate about technology and innovation. I have been through several
areas in IT over 5 years, which allowed me to have the ability to adapt to new challenges, as well
as seeking to maintain an entrepreneurial mindset.</p>
        </div>
      </div>

    </div>
  );
}