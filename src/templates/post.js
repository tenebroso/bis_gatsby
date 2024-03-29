import React from 'react'
import parse from "html-react-parser"
import { graphql } from 'gatsby'
import Image from "gatsby-image"

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';

const PostTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }

  return (
    <>
      <SEO 
        title={page.seo.title}
        description={page.seo.opengraphDescription}
        image={page && page.seo && page.seo.opengraphImage && page.seo.opengraphImage.mediaItemUrl && page.seo.opengraphImage.mediaItemUrl}
      />
      <Header />

      <div id="wrapper" className="blog-post-page">
        <div className="page-header post-header">
          <div className="container">
            <div className="post-header-text">
              <h1 className="post-header-title">{page.title}</h1>
              {/* <p className="post-header-sub-title">{page.date}</p> */}
            </div>
          </div>
        </div>
        <div className="page-content dark-bg">
          <div className="container">
            {page && page.content && typeof page.content === 'string' && parse(page.content)}
            <hr />
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
            />
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
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 680, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
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
