import React, { useState }  from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import ContactHeader from '../images/contact.jpg';
import SEO from './seo';
import { config } from '../constants';

const ContactPage = ({
  page
}) => {
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
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: config.FORM_POST,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  
  return (
    <>
      <SEO 
        title={page.seo.title}
        description={page.seo.opengraphDescription}
        image={page && page.seo && page.seo.opengraphImage && page.seo.opengraphImage.mediaItemUrl && page.seo.opengraphImage.mediaItemUrl}
      />
      <Header />

      <div id="wrapper">
        <div className="page-header">
          <div className="container">
            <div className="page-header-text">
              <h1 className="page-header-title">{page.title}</h1>
              <h2 className="page-header-sub-title">{!!page.page_header && !!page.page_header.subtitle && page.page_header.subtitle}</h2>
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
              {page && page.content && typeof page.content === 'string' && parse(page.content)}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
