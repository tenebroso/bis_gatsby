import * as React from "react"
import { Helmet } from "react-helmet"
import Header from '../components/header';
import Footer from '../components/footer';
import ContactHeader from '../images/contact.jpg';

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
const SubPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Boomerang Information Systems</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />

    <div id="wrapper">
      <div className="page-header">
        <div className="container">
          <div className="page-header-text">
            <h1 className="page-header-title">Contact Us</h1>
            <h2 className="page-header-sub-title">Learn about our office locations and ways to reach out.</h2>
          </div>
          <div className="page-header-photos banner-photos">
            <img src={ContactHeader} alt="Contact Phone, Social and Email" />
          </div>
        </div>
      </div>
      <div className="page-content dark-bg">
        <div className="container">
          <form action="#">
            <ul>
              <li>
                <label for="first_name">First Name</label>
                <input type="text" name="first_name" placeholder="John" />
              </li>
              <li>
                <label for="last_name">Last Name</label>
                <input type="text" name="last_name" placeholder="Smith" />      
              </li>
              <li>
                <label for="email">Email <span class="req">*</span></label>
                <input type="email" name="email" placeholder="john.smith@gmail.com" />
              </li>        
              <li>
                <label for="comments">Comments</label>
                <textarea cols="46" rows="3" name="comments"></textarea>
              </li>
              <li>
                <input className="button" type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="address-block-container">
        <div className="container">
          <div className="title">
            <h2  data-title="Our Locations">Our Locations</h2>
          </div>
          <div className="address-block">
            <h3>Chicago - Main Office</h3>
            53 W Jackson Blvd. Suite 1623, Chicago, IL 60604<br />
            312.662.1206<br />
            888.866.4495<br />
            <a href="mailto:orders@boomerangis.com">orders@boomerangis.com</a>
          </div>
          <div className="address-block">
            <h3>Seattle</h3>
            100 S King St. Suite 100, Seattle, WA 98104<br />
            312.662.1206<br />
            888.866.4495
          </div>
          <div className="address-block">
            <h3>Boston</h3>
            660 Main Street, Woburn, MA 01801<br />
            312.662.1206<br />
            888.866.4495
          </div>
        </div>
      </div>
      <div id="featured" className="featured-alt">
        <div className="container">
          <div className="title">
            <h2>Accurate Information, Excellent Service</h2>
            <span className="byline">Our mission at Boomerang is to give corporate information services a human touch, making due diligence a conversation instead of a headache.</span> </div>
        </div>
        <ul className="actions">
          <li><a href="#" className="button">Let's Get Started</a></li>
        </ul>
      </div>
    </div>

    <Footer />
  </>
);

export default SubPage
