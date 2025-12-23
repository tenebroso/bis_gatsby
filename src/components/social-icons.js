import React from 'react';
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';
import { config } from '../constants';

const SocialIcons = () => {

  return (
    <div className="social-icons">
      <a
        href={config.LINKEDIN_URL}
        target="_blank"
        title="Contact Boomerang Information Services at Linkedin"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  )
}

export default SocialIcons;
