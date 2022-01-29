import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
  <div className="topbar padding-top-bottom border-bottom">
    <div className="topbar-wrapper container">
    <div className="logo">
        <NavLink className="logo-link" href="01-home-ds.html">
          <div className="logo-img"><img src={require('../assets/svg/logo-ds.svg').default} alt="logo" /></div>
          <div className="logo-text">Cryptoki</div>
        </NavLink>
      </div>
      <div className="searchbox">
        <form method="get" className="main-search">
          <input className="main-search-params" type="hidden" name="params" defaultValue="all" />
          <button className="search-params">
            <span className="search-param-title">All items</span>
            <svg className="crumina-icon">
              <use xlinkHref="#arrow-down-icon" />
            </svg>
          </button>
          <ul className="search-dropdown">
            <li data-param="all">All items</li>
            <li data-param="auctions">Auctions</li>
            <li data-param="collections">Collections</li>
            <li data-param="creators">Creators</li>
          </ul>
          <input type="text" className="search-input" name="head-search" id="head-search" placeholder="Enter your search here..." />
          <button className="search-button">
            <svg className="crumina-icon">
              <use xlinkHref="#search-icon" />
            </svg>
          </button>
        </form>
      </div>
      <div className="collection-box">
        <a className="btn btn-normal btn-dark create-collection" href="26-upload-artwork.html">Home</a>
      </div>
    </div>
  </div>
  {/*MOBILE SEARCH FORM*/}
  <div id="mobile-search-block">
    <form action="#" id="mobile-search-form">
      <input type="text" className="search-input" name="mobile-search" placeholder="Enter your search here..." />
      <button className="search-button"><svg className="crumina-icon">
          <use xlinkHref="#search-icon" />
        </svg></button>
    </form>
  </div>
</header>

  );
}

export default Header;
