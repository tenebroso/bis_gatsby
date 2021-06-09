import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useRef, useEffect } from 'react';

import SocialIcons from './social-icons';
import LogoImg from "../images/logo-2.png";
import LogoCircle from "../images/logo-circle.png";

const Header = () => {
  const logoRoller = useRef(null);

  const handleScroll = () => {
    if (!logoRoller.current) return;

    if (window && window.pageYOffset && window.pageYOffset > 0) {
      document.getElementById('header').classList.add('sticky');
      logoRoller.current.classList.add('yo');
    } else {
      document.getElementById('header').classList.remove('sticky');
      logoRoller.current.classList.remove('yo');
    }
  }

  const toggleNav = () => {
    const menu = document.querySelector('#menu');

    if (menu && !menu.classList.contains('opened')) {
      menu.classList.add('opened');
      return;
    }

    if (menu) {
      menu.classList.remove('opened');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const {
    wp: {
      allSettings
    },
  } = useStaticQuery(graphql`
    query GetSiteOptions {
      wp {
        allSettings {
          generalSettingsUrl
          generalSettingsTitle
          generalSettingsDescription
        }
      }
    }  
  `)

  return (
    <>
      <div id="header">
        <div className="container">
          <Link to="/" id="logo">
            <img src={LogoImg} className="logo" alt="Boomerang Information Systems" />
            <img src={LogoCircle} ref={logoRoller} className="alt-logo" alt="Boomerang Circle Icon" />
          </Link>
          <SocialIcons />
          <div className="menu-icon" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
          </div>
          <div id="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li><Link to="/blog/">Blog</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
              <li><Link to="/about-us/">About Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
