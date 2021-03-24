import * as React from "react"
import { Helmet } from "react-helmet"
import Header from '../components/header';
import Footer from '../components/footer';
import BlogHeader from '../images/blog-header.jpg';


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

const blogPosts = [
  {
    title: 'An SOS for the Arts',
    image: 'https://www.boomerangis.com/wp-content/uploads/2020/05/nick-bolton-_fMPg0ehPhg-unsplash-scaled.jpg',
    description: 'At Boomerang, we love the arts.  Many of our staff are actively involved in making art and we, as an organization, support the work of a variety of arts organizations.  So we are especially concerned about the ways in which the pandemic is affecting artists everywhere. At this moment of social distancing, arts organizations are [...]',
    author: 'Phil Fahim',
    date: 'May 27th, 2020',
  },
  {
    title: 'Additional Role of COVID-19 – The Nonprofit Sector',
    image: 'https://www.boomerangis.com/wp-content/uploads/2020/04/unnamed.png',
    description: 'Of the many traditions, institutions and social structures adversely affected by COVID-19, the nonprofit sector is perhaps among the most vulnerable.  Called upon to continue serving as a safety net to those most in need, nonprofits are simultaneously finding themselves in financial peril.  The stress on the sector is real and could mean the closure [...]',
    author: 'Phil Fahim',
    date: 'April 20th, 2020',
  },
  {
    title: 'A U.C.C. Glossary: Confusing Terms and Their Definitions',
    image: 'https://www.boomerangis.com/wp-content/uploads/2019/06/Blog500x300_UCCGlossary_BoomerangIS2.png',
    description: 'At our house we have an ongoing game of coming up with names for a hypothetical band, despite the fact that none of us are currently in one. Because I work in the due diligence industry, I think we should call the band “Perfected Deed”. It’s an awesome name, but my teenage sons aren’t having [...]',
    author: 'Phil Fahim',
    date: 'June 4th, 2019',
  },
  {
    title: 'An SOS for the Arts',
    image: 'https://www.boomerangis.com/wp-content/uploads/2020/05/nick-bolton-_fMPg0ehPhg-unsplash-scaled.jpg',
    description: 'At Boomerang, we love the arts.  Many of our staff are actively involved in making art and we, as an organization, support the work of a variety of arts organizations.  So we are especially concerned about the ways in which the pandemic is affecting artists everywhere. At this moment of social distancing, arts organizations are [...]',
    author: 'Phil Fahim',
    date: 'May 27th, 2020',
  },
  {
    title: 'Additional Role of COVID-19 – The Nonprofit Sector',
    image: 'https://www.boomerangis.com/wp-content/uploads/2020/04/unnamed.png',
    description: 'Of the many traditions, institutions and social structures adversely affected by COVID-19, the nonprofit sector is perhaps among the most vulnerable.  Called upon to continue serving as a safety net to those most in need, nonprofits are simultaneously finding themselves in financial peril.  The stress on the sector is real and could mean the closure [...]',
    author: 'Phil Fahim',
    date: 'April 20th, 2020',
  },
  {
    title: 'A U.C.C. Glossary: Confusing Terms and Their Definitions',
    image: 'https://www.boomerangis.com/wp-content/uploads/2019/06/Blog500x300_UCCGlossary_BoomerangIS2.png',
    description: 'At our house we have an ongoing game of coming up with names for a hypothetical band, despite the fact that none of us are currently in one. Because I work in the due diligence industry, I think we should call the band “Perfected Deed”. It’s an awesome name, but my teenage sons aren’t having [...]',
    author: 'Phil Fahim',
    date: 'June 4th, 2019',
  },
  {
    title: 'An SOS for the Arts',
    image: 'https://www.boomerangis.com/wp-content/uploads/2020/05/nick-bolton-_fMPg0ehPhg-unsplash-scaled.jpg',
    description: 'At Boomerang, we love the arts.  Many of our staff are actively involved in making art and we, as an organization, support the work of a variety of arts organizations.  So we are especially concerned about the ways in which the pandemic is affecting artists everywhere. At this moment of social distancing, arts organizations are [...]',
    author: 'Phil Fahim',
    date: 'May 27th, 2020',
  },
  {
    title: 'Additional Role of COVID-19 – The Nonprofit Sector',
    image: 'https://www.boomerangis.com/wp-content/uploads/2020/04/unnamed.png',
    description: 'Of the many traditions, institutions and social structures adversely affected by COVID-19, the nonprofit sector is perhaps among the most vulnerable.  Called upon to continue serving as a safety net to those most in need, nonprofits are simultaneously finding themselves in financial peril.  The stress on the sector is real and could mean the closure [...]',
    author: 'Phil Fahim',
    date: 'April 20th, 2020',
  },
  {
    title: 'A U.C.C. Glossary: Confusing Terms and Their Definitions',
    image: 'https://www.boomerangis.com/wp-content/uploads/2019/06/Blog500x300_UCCGlossary_BoomerangIS2.png',
    description: 'At our house we have an ongoing game of coming up with names for a hypothetical band, despite the fact that none of us are currently in one. Because I work in the due diligence industry, I think we should call the band “Perfected Deed”. It’s an awesome name, but my teenage sons aren’t having [...]',
    author: 'Phil Fahim',
    date: 'June 4th, 2019',
  }
]


// markup
const BlogPage = () => (
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
            <h1 className="page-header-title">Blog</h1>
            <h2 className="page-header-sub-title">Get to know us through our regular updates</h2>
            <p className="page-header-description">Learn about our impact in the community, what drives us and who we are.</p>
          </div>
          <div className="page-header-photos banner-photos">
            <img src={BlogHeader} alt="City Skyline" />
          </div>
        </div>
      </div>
      <div className="page-content dark-bg">
        <div className="container">
          <div className="blog-container">
            {blogPosts.map((post, i) => {
              return (
                <a href="#" className="blog-post" key={i}>
                  <div className="blog-post-content">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p className="blog-post-date">{post.date}</p>
                  </div>
                </a>
              )
            })}
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

export default BlogPage
