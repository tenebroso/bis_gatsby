import React from 'react';
import parse from 'html-react-parser';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import ContactPage from '../components/contact';

import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

import CutCosts from '../images/file.png';
import ResponsiveTeam from '../images/responsive-team.png';
import ClearReporting from '../images/clear-reporting.png';

const PageTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }

  return (
    page.title === 'Contact' ? (
      <ContactPage
        page={page}
      />
    ) : (
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
                <Image
                  fluid={featuredImage.fluid}
                  alt={featuredImage.alt}
                />
              </div>
            </div>
          </div>
          {page.title === 'Services_not_used' && (
            <div id="extra">
              <div className="container">
                <div className="title">
                  <h2>Boomerang Information Services provides 3 services</h2>
                </div>
              </div>
              <div id="three-column">
                <div className="boxA">
                  <div className="box">
                    <img src={ResponsiveTeam} alt="Responsive Team" />
                    
                    <h2>Research</h2>
                    <p>We know where and how to find the most relevant data for your clients and deliver information in a format you can use right away.</p>
                  </div>
                </div>
                <div className="boxB">
                  <div className="box">
                    <img src={ClearReporting} alt="Clear Reporting" />
                    <h2>Retrieve</h2>
                    <p>Our specialists have the jurisdictional knowledge and access to pull digital and physical records when and where they are needed.</p>
                  </div>
                </div>
                <div className="boxC">
                  <div className="box">
                    <img src={CutCosts} alt="Cut Costs" />
                    <h2>File</h2>
                    <p>We file documents five days a week to increase your capacity for more headache-free closings.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="page-content dark-bg">
            <div className={`container ${page.title.toLowerCase()}-container`}>
              {page && page.content && typeof page.content === 'string' && parse(page.content)}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    $id: String!
  ) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      id
      content
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

      page_header {
        subtitle
      }

      seo {
        canonical
        metaDesc
        title
        twitterDescription
        opengraphTitle
        opengraphUrl
        twitterTitle
        opengraphDescription

        opengraphImage {
          id
          mediaItemUrl
          altText
        }
      }

    }
  }
`