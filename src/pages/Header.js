import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  return(
    <div className="Header">
    <header>
</header>
{/* header */}
{/* header navigation */}
<nav className="border-bottom nav-ds">
  <div className="navigation-wrapper container flex-space-between align-items-center">
    <div className="nav-left-hand-part">
      <div className="logo">
        <a className="logo-link" href="01-home-ds.html">
          <div className="logo-img"><img src={require('../assets/svg/logo-ds.svg').default} alt="logo" /></div>
          <div className="logo-text">Cryptoki</div>
        </a>
      </div>
      
    <div className="searchbox">
<form method="get" className="main-search">
  <input className="main-search-params" type="hidden" name="params" defaultValue="all" />
  <input type="text" className="search-input" placeholder="Enter your search here..." />
  <button className="search-button">
    <svg className="crumina-icon">
      <use xlinkHref="#search-icon" />
    </svg>
  </button>
</form>
</div>
    </div>

    <div className="nav-right-hand-part">
      {/* header user profile */}
      <ul className="navigation-menu">
        {/* <Link className="menu-item"><li className="menu-link" to='/'>Home</li></Link> */}
      </ul>
      {/* header user profile */}
    </div>
  </div>
  {/* header search block */}
  {/* header search block */}
</nav>

    </div>
  )
}

export default Header;
