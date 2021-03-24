import * as React from "react"
import BCorp from "../images/bcorp.png"
import NPRRA from "../images/NPRRA.png"
import Naltea from "../images/naltea-logo.png"
import Gold from "../images/10000-small-business.png"

// markup
const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer-logos">
        <img src={BCorp} alt="B Corp" />
        <img src={NPRRA} alt="NPRRA" />
        <img src={Naltea} alt="Naltea" />
        <img src={Gold} alt="Gold" />
      </div>
      <p>&copy; Boomerang Information Systems. Offices in Chicago, Seattle, and Boston | <a href="#">Privacy Policy</a> | All rights reserved.</p>
    </div>
  </div>
)

export default Footer
