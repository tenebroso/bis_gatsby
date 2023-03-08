import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from "html-react-parser"

const Footer = () => {
  const {
    wp: {
      boomerangOptions: { boomerang_options }
    },
  } = useStaticQuery(graphql`
    query GetBoomerangOptions {
      wp {
        boomerangOptions {
          boomerang_options {
            footerCta {
              buttonLink
              buttonText
              fieldGroupName
              heading
              subtitle
            }
            footerLogos {
              fieldGroupName
              logos {
                logoImage {
                  altText
                  sourceUrl
                }
              }
            }
            footerCopyrightText {
              copyrightInformation
            }
          }
        }
      }
    }      
  `)

  const { footerCta } = boomerang_options;
  const { logos } = boomerang_options.footerLogos;
  const { footerCopyrightText } = boomerang_options;

  return (
    <>
      <div id="featured" className="featured-alt">
        <div className="container">
          <div className="title">
            {footerCta.heading && (
              <h2>{footerCta.heading}</h2>
            )}
            {footerCta.subtitle && (
              <span className="byline">{footerCta.subtitle}</span>
            )}
          </div>
          <ul className="actions">
            <li><Link to={footerCta.buttonLink} className="button">{footerCta.buttonText}</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-logos">
            {logos.map((logo, idx) => {
              
              if (logo.logoImage.altText === 'Certified B Corp') {
                return (
                  <a href="https://bcorporation.net/" target="_blank" rel="noopener" rel="noreferrer" key={idx}>
                    <img className="b-corp" src={logo.logoImage.sourceUrl} alt={logo.logoImage.altText} />
                  </a>
                )
              }
              return (
                <img key={idx} src={logo.logoImage.sourceUrl} alt={logo.logoImage.altText} />
              )
            })}
          </div>
          <p>{footerCopyrightText.copyrightInformation && parse(footerCopyrightText.copyrightInformation)} | All rights reserved</p>
        </div>
      </div>
    </>
  )
};

export default Footer
