import React from 'react';

const Footer = () => {
  return (
    <div className="Footer">
    <footer className="footer footer-margin">
      <div className="footer-wrapper container">
        {/*  copyright section */}
        <div className="footer-copyright flex-space-between">
          <span className="copyright-text">
            My NFT 2021 - All Rights Reserved
          </span>
          <ul className="sub-footer-menu">
            <li className="menu-item">Terms of Service</li>
            <li className="menu-item">Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer;
