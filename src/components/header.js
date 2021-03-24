import * as React from "react"
import { useRef, useEffect } from "react";
import { Link } from "gatsby"
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

  return (
    <>
      <div id="header">
        <div className="container">
          <Link to="/" id="logo">
            <img src={LogoImg} className="logo" alt="Boomerang Information Systems" />
            <img src={LogoCircle} ref={logoRoller} className="alt-logo" />
          </Link>
          <div id="menu">
            <ul>
              <li className="current_page_item"><Link to="/">Home</Link></li>
              <li><Link to="/subpage">About Us</Link></li>
              <li><Link to="#">Services</Link></li>
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
