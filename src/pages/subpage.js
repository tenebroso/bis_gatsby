import * as React from "react"
import { Helmet } from "react-helmet"
import Header from '../components/header';
import Footer from '../components/footer';


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
const SubPage = () => (
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
            <h1 className="page-header-title">Services</h1>
            <h2 className="page-header-sub-title">Boomerang takes the stress out of due diligence.</h2>
            <img src="https://www.boomerangis.com/wp-content/uploads/2018/12/magnifying-icon.png" />
            <img src="https://www.boomerangis.com/wp-content/uploads/2018/12/hand-icon.png" />
            <img src="https://www.boomerangis.com/wp-content/uploads/2018/12/file-icon.png" />
          </div>
          <div className="page-header-photos banner-photos">
            <img src="https://placehold.it/800x400" alt="City Skyline" />
          </div>
        </div>
      </div>
      <div className="page-content dark-bg">
        <div className="container">
          <h1>HTML Ipsum Presents</h1>

            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

            <h2>Header Level 2</h2>

            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>

            <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

            <h3>Header Level 3</h3>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
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

export default SubPage