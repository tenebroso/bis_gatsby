import React from 'react'
import parse from "html-react-parser"
import { graphql, Link } from 'gatsby'
import Image from "gatsby-image"

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import BlogHeader from '../images/blog-header.jpg';

const BlogTemplate = ({
  data: {
    allWpPost: {
      nodes: posts
    },
    wpPage: {
      title,
      page_header,
      featuredImage,
      seo,
    }
  },
  pageContext: { nextPagePath, previousPagePath },
}) => {
  

  return (
    <>
    <SEO 
      title={seo.title}
      description={seo.opengraphDescription}
      image={seo && seo.opengraphImage && seo.opengraphImage.mediaItemUrl && seo.opengraphImage.mediaItemUrl}
    />
    <Header />

    <div id="wrapper">
      <div className="page-header">
        <div className="container">
          <div className="page-header-text">
            <h1 className="page-header-title">{title}</h1>
            <h2 className="page-header-sub-title">{page_header.subtitle}</h2>
            {/* <p className="page-header-description">Learn about our impact in the community, what drives us and who we are.</p> */}
          </div>
          <div className="page-header-photos banner-photos">
            <img src={BlogHeader} alt="City Skyline" />
          </div>
        </div>
      </div>
      <div className="page-content dark-bg">
        <div className="container">
          <div className="blog-container">
            {posts.map((post, i) => {
              const featuredImage = {
                fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
                alt: post.featuredImage?.node?.alt || ``,
              }

              return (
                <Link to={post.uri} className="blog-post" key={i}>
                  <div className="blog-post-content">
                    <h2>{post.title}</h2>
                    <p>{parse(post.excerpt)}</p>
                    <Image
                      fluid={featuredImage.fluid}
                      alt={featuredImage.alt}
                    />
                    <p className="blog-post-date">{post.date}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default BlogTemplate

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
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

    wpPage(title: {eq: "Blog"}) {
      id
      title
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
