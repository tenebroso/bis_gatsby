import * as React from "react"
import { Helmet } from "react-helmet"
import Header from '../../components/header';


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
const Blog = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Boomerang Information Systems</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
    BLOG
  </>
);

export default Blog
