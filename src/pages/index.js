import * as React from "react"
import { useRef } from "react";
import { Helmet } from "react-helmet"
import LogoImg from "../images/logo-2.png";
import LogoCircle from "../images/logo-circle.png";
import SampleImg from "../images/mikita-yo-A1O9SszBHqE-unsplash.jpg";
import GroupPhoto from "../images/IMG_9201-1200x800.jpg";

import EastCoast from "../images/eastcoast.png";
import WestCoast from "../images/pacific.png";
import Midwest from "../images/midwest.png";


const COLORS = {
  BRAND_PRIMARY: '#39b4ed',
  GREY: '#343e48',
}

// styles
const pageStyles = {
  color: COLORS.GREY,
  padding: 96,
  fontFamily: "'Jost', sans-serif",
}

const sectionsStyles = {
  borderTop: `1px solid ${COLORS.GREY}`,
  paddingTop: "20px",
  marginTop: "20px",
}

const sectionHeadings = {
  fontSize: "36px",
  marginTop: 0,
}

const headingBase = {
  fontWeight: "700",
  marginBottom: 0,
  marginTop: "1rem",
}

const typography = {
  h1: {
    ...headingBase,
    fontSize: "48px",
  },
  h2: {
    ...headingBase,
    fontSize: "42px",
  },
  h3: {
    ...headingBase,
    fontSize: "36px",
  },
  h4: {
    ...headingBase,
    fontSize: "24px",
  },
  h5: {
    ...headingBase,
    fontSize: "18px",
  },
  h6: {
    ...headingBase,
    fontSize: "16px",
  }
}

const button = {
  display: "inline-flex",
  padding: "10px 20px",
  border: "1px solid transparent",
  backgroundColor: COLORS.BRAND_PRIMARY,
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
  borderRadius: "2px",
  marginBottom: "10px",
}

const buttonAlt = {
  ...button,
  backgroundColor: "white",
  borderColor: COLORS.BRAND_PRIMARY,
  color: COLORS.BRAND_PRIMARY,
}

// markup
const IndexPage = () => {
  const logoRoller = useRef(null);

  const handleScroll = () => {
    if (window && window.pageYOffset && window.pageYOffset > 0) {
      document.getElementById('header').classList.add('sticky');
      console.log(logoRoller.current);
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Boomerang Information Systems</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" /> 
      <div id="wrapper">
        <div id="header">
          <div className="container">
            <a id="logo" href="/">
              <img src={LogoImg} className="logo" alt="Boomerang Information Systems" />
              <img src={LogoCircle} ref={logoRoller} className="alt-logo" />
            </a>
            <div id="menu">
              <ul>
                <li className="current_page_item"><a href="#" accessKey="1" title="">Home</a></li>
                <li><a href="#" accessKey="2" title="">About Us</a></li>
                <li><a href="#" accessKey="3" title="">Services</a></li>
                <li><a href="#" accessKey="5" title="">Blog</a></li>
                <li><a href="#" accessKey="4" title="">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="banner">
          <div className="banner-container">
            <div className="banner-text">
              <div className="title">
                <h2>One stop for all your research, retrieval, and filings.</h2>
                <span className="byline">UCC, liens, litigation, title abstracting</span>
              </div>
            </div>
            <div className="banner-photos">
              <div className="banner-photo-left">
                <img src={SampleImg} alt="City Skyline" />
              </div>
              <div className="banner-photo-right">
                <img src={GroupPhoto} alt="Group Gathered around a table" />
                <img src="https://www.boomerangis.com/wp-content/uploads/2018/12/jurisdictions.jpg" alt="Map" />
              </div>
            </div>
          </div>
        </div>
        <div id="featured">
          <div className="container">
            <div className="title">
              <h2>Accurate Information, Excellent Service</h2>
              <span className="byline">Our mission at Boomerang is to give corporate information services a human touch, making due diligence a conversation instead of a headache.</span> </div>
          </div>
          <ul className="actions">
            <li><a href="#" className="button">Let's Get Started</a></li>
          </ul>
        </div>
        <div id="extra" className="container">
          <div className="title">
            <h2>We’re here for you.</h2>
            <span className="byline">Most requests are completed within 24-hours and we keep you informed every step of the way.</span> </div>
          <div id="three-column">
            <div className="boxA">
              <div className="box">
                <img src="https://www.boomerangis.com/wp-content/uploads/2018/12/Cut-Costs.png" />
                <p>Other service providers charge up to 50% more than Boomerang. We make it clear exactly what you are paying for, with no hidden fees. Ever.</p>
              </div>
            </div>
            <div className="boxB">
              <div className="box">
                <img src="https://www.boomerangis.com/wp-content/uploads/2018/12/Clear-Reporting.png" />
                <p>Deliverables come in clearly labeled PDFs with outlines and summaries you can understand at a glance. Plus your researcher is  always available for questions.</p>
              </div>
            </div>
            <div className="boxC">
              <div className="box">
                <img src="https://www.boomerangis.com/wp-content/uploads/2018/12/Responsive-Team.png" />
                <p>Boomerang’s research team is with you every step of the way. Know exactly what the status of request is and get updated at every stage. If you have questions, our research specialists have answers.</p>
              </div>
            </div>
          </div>
          <ul className="actions">
            <li><a href="#" className="button">Contact Us</a></li>
          </ul>
        </div>
        <div id="page">
          <div className="container">
            <div className="title">
              <h2>Regional Areas</h2>
              <span className="byline">Our offices provide complete county coverage in Illinois, Indiana, Michigan, Ohio, <br />Wisconsin, Connecticut, Massachusetts, New York, Pennsylvania, California, Oregon, and Washington. <br />Our offices in Chicago and Seattle also provide a suite of DMV, consulate, and Secretary of State services.</span> </div>
            <div className="gallery">
              <div className="boxA">
                <h3>Pacific Coast</h3>
                <img src={WestCoast} alt="" />
              </div>
              <div className="boxB">
                <h3>Great Lakes/Midwest</h3>
                <img src={Midwest} alt="" />
              </div>
              <div className="boxC">
                <h3>Mid-Atlantic/East Coast</h3>
                <img src={EastCoast} alt="" />
              </div>
            </div>
          </div>	
          <p>Since 2002, our clients have trusted us with their most complex research projects, freeing them up to focus on bigger priorities.<br />Our exceptional customer service, attention to detail and fast turnaround times have helped us <br />build our reputation as a reliable partner for all your research needs.</p>
          <ul className="actions">
            <li><a href="#" className="button">Contact Us</a></li>
          </ul>
        </div>

        <div id="blog">
          <div className="container">
            <div className="blog-container">
            <div className="title">
              <h2>Latest from the Blog</h2>
              <span className="byline"></span>
            </div>
              <a href="#" className="blog-post">
                <div className="blog-post-content">
                  <h2>An SOS for the Arts</h2>
                  <p>At Boomerang, we love the arts.  Many of our staff are actively involved in making art and we, as an organization, support the work of a variety of arts organizations...</p>
                  <img src="https://www.boomerangis.com/wp-content/uploads/2020/05/nick-bolton-_fMPg0ehPhg-unsplash-320x202.jpg" alt="An SOS for the Arts" />
                </div>
              </a>

              <a href="#" className="blog-post">
                <div className="blog-post-content">
                  <h2>Additional Role of COVID-19 – The Nonprofit Sector</h2>
                  <p>Of the many traditions, institutions and social structures adversely affected by COVID-19, the nonprofit sector is perhaps among the most vulnerable...</p>
                  <img src="https://www.boomerangis.com/wp-content/uploads/2020/04/unnamed-320x202.png" alt="Additional role of COVID-19" />
                </div>
              </a>

              <a href="#" className="blog-post">
                <div className="blog-post-content">
                  <h2>A U.C.C. Glossary: Confusing Terms and Their Definitions</h2>
                  <p>At our house we have an ongoing game of coming up with names for a hypothetical band, despite the fact that none of us are currently in one...</p>
                  <img src="https://www.boomerangis.com/wp-content/uploads/2019/06/Blog500x300_UCCGlossary_BoomerangIS2-320x202.png" alt="Boomerang UCC Glossary" />
                </div>
              </a>

              <ul className="actions">
                <li><a href="#" className="button">Read More</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" className="container">
        <p>&copy; Boomerang Information Systems. Offices in Chicago, Seattle, and Boston | <a href="#">Privacy Policy</a> | All rights reserved.</p>
      </div>
    </>
    // <main style={pageStyles}>
    //   <link rel="preconnect" href="https://fonts.gstatic.com" />
    //   <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" /> 
    //   <title>Home Page</title>
    //   <img src={LogoImg} alt="Boomerang Information Systems" />
  
    //   <section style={sectionsStyles}>
    //     <h1 style={sectionHeadings}>Typography</h1>

    //     <h1 style={typography.h1}>Heading 1</h1>
    //     <h2 style={typography.h2}>Heading 2</h2>
    //     <h3 style={typography.h3}>Heading 3</h3>
    //     <h4 style={typography.h4}>Heading 4</h4>
    //     <h5 style={typography.h5}>Heading 5</h5>
    //     <h6 style={typography.h6}>Heading 6</h6>

    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt eros eu lorem congue aliquet. Mauris eu purus feugiat lorem luctus aliquam eu at turpis. Nullam sit amet fringilla lacus. Vivamus ac cursus ex. Mauris eleifend mauris ac hendrerit eleifend. Sed metus dui, efficitur id accumsan a, tincidunt ut arcu. Praesent volutpat lorem neque, fermentum accumsan turpis efficitur vitae. Ut tortor justo, aliquam in orci vitae, viverra viverra ante. Etiam accumsan leo at iaculis pellentesque.</p>
    //     <p>Nullam malesuada, sem eget finibus hendrerit, sem ex tincidunt neque, hendrerit vestibulum arcu mauris eget velit. Quisque fermentum dignissim tellus porttitor hendrerit. Nullam posuere mi vel risus auctor aliquet. Integer tincidunt maximus augue, vel sollicitudin magna lobortis a. Maecenas tempus bibendum leo, at tempor lectus tempor quis. Etiam ullamcorper, mi vitae tincidunt commodo, orci neque malesuada lorem, ut imperdiet urna mi rhoncus tortor.</p>
    //   </section>

    //   <section style={sectionsStyles}>
    //     <h1 style={sectionHeadings}>Buttons</h1>

    //     <a style={button}>Button CTA</a>
    //     <br />
    //     <a style={buttonAlt}>Button CTA</a>
    //   </section>
    // </main>
  )
}

export default IndexPage
