import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import USAMap from "react-usa-map"

import Header from '../components/header';
import Footer from '../components/footer';
import { COLORS } from '../constants/colors';


// import CutCosts from '../images/cut-costs.png';
// import ResponsiveTeam from '../images/responsive-team.png';
// import ClearReporting from '../images/clear-reporting.png';

import Binoculars from '../images/iconmonstr-binoculars-8-240.png';
import Magnifier from '../images/iconmonstr-magnifier-10-240.png';
import Document from '../images/iconmonstr-note-31-240.png';

import JurisdictionsPhoto from '../images/jurisdictions.jpg';
import SampleImg from '../images/mikita-yo-A1O9SszBHqE-unsplash.jpg';
import GroupPhoto from '../images/IMG_9201-1200x800.jpg';

import EastCoast from '../images/eastcoast.png';
import WestCoast from '../images/pacific.png';
import Midwest from '../images/midwest.png';

const STATES = [
  'CA', 'WA', 'OR', 'IL', 'IN', 'OH', 'MI', 'WI', 'CT', 'DC', 'DE', 'MA', 'MD', 'NJ', 'NY', 'PA'
];

const STATES_CONFIG = {};

const statesCustomConfig = () => {
  STATES.forEach(state => {
    STATES_CONFIG[state] = {
      'fill': COLORS.BRAND_PRIMARY,
    }
  });

  return STATES_CONFIG;
};

const PageTemplate = ({ data: { page } }) => {
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
        <Header />
        <div id="banner">
          <div className="banner-container">
            <div className="banner-text">
              <div className="title">
                {page.homepage_editor.headline && (
                  <h2>{page.homepage_editor.headline}</h2>
                )}
                {page.homepage_editor.subheadline && (
                  <span className="byline">{page.homepage_editor.subheadline}</span>
                )}
              </div>
            </div>
            <div className="banner-photos">
              <div className="banner-photo-left">
                <img src={SampleImg} alt="City Skyline" />
              </div>
              <div className="banner-photo-right">
                <img src={GroupPhoto} alt="Group Gathered around a table" />
                <img src={JurisdictionsPhoto} alt="Map" />
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
            <li><Link to="/contact" className="button">Let's Get Started</Link></li>
          </ul>
        </div>
        {/* <div id="extra" className="container">
          <div className="title">
            <h2>We’re here for you.</h2>
            <span className="byline">Most requests are completed within 24-hours and we keep you informed every step of the way.</span> </div>
          <div id="three-column">
            <div className="boxA">
              <div className="box">
                <img src={CutCosts} alt="Cut Costs" />
                <p>Other service providers charge up to 50% more than Boomerang. We make it clear exactly what you are paying for, with no hidden fees. Ever.</p>
              </div>
            </div>
            <div className="boxB">
              <div className="box">
                <img src={ClearReporting} alt="Clear Reporting" />
                <p>Deliverables come in clearly labeled PDFs with outlines and summaries you can understand at a glance. Plus your researcher is  always available for questions.</p>
              </div>
            </div>
            <div className="boxC">
              <div className="box">
                <img src={ResponsiveTeam} alt="Responsive Team" />
                <p>Boomerang’s research team is with you every step of the way. Know exactly what the status of request is and get updated at every stage. If you have questions, our research specialists have answers.</p>
              </div>
            </div>
          </div>
          <ul className="actions">
            <li><Link to="/contact" className="button">Contact Us</Link></li>
          </ul>
        </div> */}
        <div id="extra" className="container">
          <div className="title">
            <h2>Our Services</h2>
            {/* <span className="byline">Most requests are completed within 24-hours and we keep you informed every step of the way.</span> */}
          </div>
          <div id="three-column">
            <div className="boxA">
              <div className="box no-outline">
                <img src={Binoculars} alt="Binoculars" />
                <h2>County Search</h2>
                <p>UCC | Liens | Litigation</p>
              </div>
            </div>
            <div className="boxB">
              <div className="box no-outline">
                 <img src={Document} alt="Document" />
                <h2>Title Search</h2>
                <p>Commercial | Residential</p>
              </div>
            </div>
            <div className="boxC">
              <div className="box no-outline">
                <img src={Magnifier} alt="Magnifiying Icon" />
                <h2>State Level</h2>
                <p>Corporate | UCC</p>
              </div>
            </div>
          </div>
          <ul className="actions">
            <li><Link to="/contact" className="button">Contact Us</Link></li>
          </ul>
        </div>
        <div id="page">
          <div className="container">
            <div className="map-wrapper">
              <USAMap customize={statesCustomConfig()} />
              <div className="map-overlay">
                
                  <div className="title">
                    <h2  data-title="Full Coverage States">Full Coverage States</h2>
                    <p className="byline">We assist with research and filing from coast-to-coast, with a focus on the States shown below where we cover every County</p>
                  </div>
                  <div className="addresses">
                    <div className="address-block">
                      <h3>Pacific Coast</h3>
                      CA, WA, OR
                    </div>
                    <div className="address-block">
                      <h3>Great Lakes/Midwest</h3>
                      IL, IN, OH, MI, WI
                    </div>
                    <div className="address-block">
                      <h3>Mid-Atlantic/East Coast</h3>
                      CT, DC, DE, MA, MD, NJ, NY, PA
                    </div>
                  </div>

              </div>
            </div>
{/*             
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
            </div> */}
          </div>	
          {/* <p>Since 2002, our clients have trusted us with their most complex research projects, freeing them up to focus on bigger priorities.<br />Our exceptional customer service, attention to detail and fast turnaround times have helped us <br />build our reputation as a reliable partner for all your research needs.</p> */}
          {/* <ul className="actions">
            <li><Link to="/contact" className="button">Contact Us</Link></li>
          </ul> */}
        </div>

        <div id="blog">
          <div className="container">
            <div className="blog-container">
            <div className="title">
              <h2>Latest from the Blog</h2>
              <span className="byline"></span>
            </div>
              <Link className="blog-post" to="/blog">
                <div className="blog-post-content">
                  <h2>An SOS for the Arts</h2>
                  <p>At Boomerang, we love the arts.  Many of our staff are actively involved in making art and we, as an organization, support the work of a variety of arts organizations...</p>
                  <img src="https://www.boomerangis.com/wp-content/uploads/2020/05/nick-bolton-_fMPg0ehPhg-unsplash-320x202.jpg" alt="An SOS for the Arts" />
                </div>
              </Link>

              <Link className="blog-post" to="/blog">
                <div className="blog-post-content">
                  <h2>Additional Role of COVID-19 – The Nonprofit Sector</h2>
                  <p>Of the many traditions, institutions and social structures adversely affected by COVID-19, the nonprofit sector is perhaps among the most vulnerable...</p>
                  <img src="https://www.boomerangis.com/wp-content/uploads/2020/04/unnamed-320x202.png" alt="Additional role of COVID-19" />
                </div>
              </Link>

              <Link className="blog-post" to="/blog">
                <div className="blog-post-content">
                  <h2>A U.C.C. Glossary: Confusing Terms and Their Definitions</h2>
                  <p>At our house we have an ongoing game of coming up with names for a hypothetical band, despite the fact that none of us are currently in one...</p>
                  <img src="https://www.boomerangis.com/wp-content/uploads/2019/06/Blog500x300_UCCGlossary_BoomerangIS2-320x202.png" alt="Boomerang UCC Glossary" />
                </div>
              </Link>

              <ul className="actions">
                <li><Link className="button" to="/blog">Read More</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageTemplate

export const homeQuery = graphql`
  query HomePageById(
    $id: String!
  ) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      id
      uri
      slug
      homepage_editor {
        headline
        leftImage {
          altText
          srcSet
          mediaItemUrl
        }
        rightImageBottom {
          altText
          mediaItemUrl
          srcSet
        }
        subheadline
        rightImageTop {
          altText
          mediaItemUrl
          srcSet
        }
      }
    }
  }
`