import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useRef, useEffect } from "react";

import SocialIcons from './social-icons';
import LogoImg from "../images/logo-2.png";
import LogoCircle from "../images/logo-circle.png";

// markup
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

  console.log(allSettings);

  return (
    <>
      <div id="header">
        <div className="container">
          <Link to="/" id="logo">
            <img src={LogoImg} className="logo" alt="Boomerang Information Systems" />
            <img src={LogoCircle} ref={logoRoller} className="alt-logo" alt="Boomerang Circle Icon" />
          </Link>
          <SocialIcons />
          <div id="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
