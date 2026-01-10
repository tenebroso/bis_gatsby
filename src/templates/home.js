import React from 'react'
import { Helmet } from 'react-helmet'
// import parse from "html-react-parser"
import { graphql, Link } from 'gatsby'
import Image from "gatsby-image"
import USAMap from 'react-usa-map'

import Header from '../components/header';
import Footer from '../components/footer';
import { COLORS } from '../constants/colors';

import Binoculars from '../images/iconmonstr-binoculars-8-240.png';
import Magnifier from '../images/iconmonstr-magnifier-10-240.png';
import Document from '../images/iconmonstr-note-31-240.png';


import SampleImg from '../images/mikita-yo-A1O9SszBHqE-unsplash.jpg';
import GroupPhotoUpdated from '../images/group-of-people.jpg';

const STATES = [
  'CA', 'WA', 'OR', 'IL', 'IN', 'OH', 'MI', 'WI', 'CT', 'DC', 'DE', 'MA', 'MD', 'NJ', 'NY', 'PA', 'FL','MN', 'DC1', 'DC2'
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

const PageTemplate = ({
  data: {
    page,
    allWpPost: {
      nodes: posts
    },
  }
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Our mission <!-- at Boomerang -->is to give corporate information services a human touch, making due diligence a conversation instead of a headache." />
        <title>Boomerang Information Services</title>
        <link rel="canonical" href="https://boomerangis.com" />
      </Helmet>
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
                <img src={GroupPhotoUpdated} alt="Group Gathered around a table" />
                {/* <img src={JurisdictionsPhoto} alt="Map" /> */}
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
        <div id="extra" className="container">
          <div className="title">
            <h2>Our Services</h2>
          </div>
          <div id="three-column">
            <Link className="boxA" to={'/services#county'}>
              <div className="box no-outline">
                <img src={Binoculars} alt="Binoculars" />
                <h2>County Search</h2>
                <p>UCC | Liens | Litigation</p>
              </div>
            </Link>
            <Link className="boxB" to={'/services#title'}>
              <div className="box no-outline">
                 <img src={Document} alt="Document" />
                <h2>Title Search</h2>
                <p>Commercial | Residential</p>
              </div>
            </Link>
            <Link className="boxC" to={'/services#ucc'}>
              <div className="box no-outline">
                <img src={Magnifier} alt="Magnifiying Icon" />
                <h2>State Level</h2>
                <p>Corporate | UCC</p>
              </div>
            </Link>
          </div>
          <ul className="actions">
            <li><Link to="/contact" className="button">Contact Us</Link></li>
          </ul>
        </div>
        <div id="page">
          <div className="container">
            <div className="title">
              <h2>Full Coverage States</h2>
            </div>
            <div className="map-wrapper">
              <USAMap customize={statesCustomConfig()} title="Boomerang Information Services Areas of Coverage" />
              <div className="map-overlay">
                  <div className="title">
                    <p className="byline">We assist with research and filing from coast-to-coast, with a focus on the States shown below where we cover every County</p>
                  </div>
                  <div className="addresses">
                    <div className="address-block">
                      <h3>Pacific Coast</h3>
                      CA, WA, OR
                    </div>
                    <div className="address-block">
                      <h3>Great Lakes/Midwest</h3>
                      IL, IN, OH, MI, MN, WI
                    </div>
                    <div className="address-block">
                      <h3>Mid-Atlantic/East Coast</h3>
                      CT, DC, DE, FL, MA, MD, NJ, NY, PA
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div id="blog">
          <div className="container">
            <div className="blog-container">
            <div className="title">
              <h2>Latest from the Blog</h2>
              <span className="byline"></span>
            </div>
              {posts.map((post, i) => {
                const featuredImage = {
                  fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
                  alt: post.featuredImage?.node?.alt || ``,
                }

                return (
                  <Link to={post.uri} className="blog-post" key={i}>
                    <div className="blog-post-content">
                      <h2>{post.title}</h2>
                      {/* <p>{parse(post.excerpt)}</p> */}
                      <Image
                        fluid={featuredImage.fluid}
                        alt={featuredImage.alt}
                      />
                      {/* <p className="blog-post-date">{post.date}</p> */}
                    </div>
                  </Link>
                )
              })}

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

    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title

        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
