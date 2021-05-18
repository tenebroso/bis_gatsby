import React, { useState }  from "react"
import axios from "axios";
import Header from '../components/header';
import Footer from '../components/footer';
import ContactHeader from '../images/contact.jpg';
import SEO from '../components/seo';
import { config } from '../constants';

// markup
const ContactPage = () => {
  
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
      console.log(ok, msg);
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: config.FORM_POST,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  
  return (
    <>
      <SEO 
        title="Contact Us - Boomerang Information Systems"
        description=''
      />
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
            <div className="bis-form-container">
              <h3 className="title">Contact Us</h3>
              {(!serverState.submitting && serverState.status) ? (
                <p>Thank you! Your form submission has been received.</p>
              ) : (
                <form onSubmit={handleOnSubmit} className="bis-form">
                  <input type="email" name="email" placeholder="Your Email" />
                  <input type="text" name="name" placeholder="Your Name" />
                  <textarea type="text" name="message" placeholder="Your Message" />
                  <button type="submit" className="button">Send</button>
                </form>
              )}
              
            </div>
          </div>
        </div>
        <div className="address-block-container">
          <div className="container">
            <div className="title">
              <h2  data-title="Our Location">Our Location</h2>
            </div>
            <div className="address-block">
              <h3>Chicago - Main Office</h3>
              53 W Jackson Blvd. Suite 1623, Chicago, IL 60604<br />
              312.662.1206<br />
              888.866.4495<br />
              <a href="mailto:orders@boomerangis.com">orders@boomerangis.com</a>
            </div>
            {/* <div className="address-block">
              <h3>Seattle</h3>
              100 S King St. Suite 100, Seattle, WA 98104<br />
              312.662.1206<br />
              888.866.4495<br />
              <a href="mailto:orders@boomerangis.com">orders@boomerangis.com</a>
            </div>
            <div className="address-block">
              <h3>Boston</h3>
              660 Main Street, Woburn, MA 01801<br />
              312.662.1206<br />
              888.866.4495<br />
              <a href="mailto:orders@boomerangis.com">orders@boomerangis.com</a>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
