import React from "react"
import { Helmet } from "react-helmet"
import parse from "html-react-parser"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Header from '../components/header';
import Footer from '../components/footer';
import MagnifyingIcon from '../images/magnifying-icon.png';
import HandIcon from '../images/hand-icon.png';
import FileIcon from '../images/file-icon.png';
import { COLORS } from '../constants/colors';

const PostTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }

  return (
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
              <h1 className="page-header-title">{page.title}</h1>
              <h2 className="page-header-sub-title">{!!page.page_header && !!page.page_header.subtitle && page.page_header.subtitle}</h2>
              <img src={MagnifyingIcon} />
              <img src={HandIcon} />
              <img src={FileIcon} />
            </div>
            <div className="page-header-photos banner-photos">
              <Image
                fluid={featuredImage.fluid}
                alt={featuredImage.alt}
              />
            </div>
          </div>
        </div>
        <div className="page-content dark-bg">
          <div className="container">
            {page && page.content && typeof page.content === 'string' && parse(page.content)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostTemplate

export const postQuery = graphql`
  query PostById(
    $id: String!
  ) {
    # selecting the current page by id
    page: wpPost(id: { eq: $id }) {
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
    }
  }
`
