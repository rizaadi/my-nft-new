import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return <div>
    <nav>
      <header className="site-header">
        <div className="topbar padding-top-bottom border-bottom">
          <div className="topbar-wrapper container">
            <div className="logo">
              <a className="logo-link" href="01-home-ds.html">
                <div className="logo-img"><img src={require('../assets/svg/logo-ds.svg').default} alt="logo" /></div>
                <div className="logo-text">Cryptoki</div>
              </a>
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
            <div className="header-user-profile cryptoki-notif-bttn" data-target="profile-dropdown">
              <div className="user-meta">
                <div className="user_name">Dexter Stark</div>
                <div className="user_score">$291.36</div>
              </div>
              <div className="avatar box-42">
                <img src="img/avatar.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                  <use xlinkHref="#check-icon" />
                </svg></span>
              </div>
              <div className="closing-icon">
                <svg className="crumina-icon close-icon">
                  <use xlinkHref="#cross-icon" />
                </svg>
              </div>
              <div id="profile-dropdown" className="cryptoki-notif-target">
                <div className="profile-dropdown-header profile-cover-image" />
                <div className="profile-dropdown-body">
                  <div className="profile-heading">
                    <div className="profile-avatar avatar box-26">
                      <img src="img/avatar.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span>
                    </div>
                    <div className="profile-link">
                      <a className="btn  btn-small gradient-background" href="06-profile-page.html">My
                        Profile</a>
                    </div>
                  </div>
                  <ul className="profile-menu">
                    <li><a href="26-profile-info.html"><svg className="crumina-icon">
                      <use xlinkHref="#user-icon" />
                    </svg>Profile Info</a></li>
                    <li><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#settings-icon" />
                    </svg>Account Settings</a></li>
                    <li><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#slide-filter-icon" />
                    </svg>Notification Settings</a></li>
                    <li><a href="10-profile-dashboard.html"><svg className="crumina-icon">
                      <use xlinkHref="#dashboard-icon" />
                    </svg>Dashboard</a></li>
                    <li><a href="11-profile-sales-statement.html"><svg className="crumina-icon">
                      <use xlinkHref="#file-text-icon" />
                    </svg>Sales Statement</a></li>
                    <li><a href="12-profile-upload-item.html"><svg className="crumina-icon">
                      <use xlinkHref="#picture-icon" />
                    </svg>Upload Item</a></li>
                    <li><a href="13-profile-manage-items.html"><svg className="crumina-icon">
                      <use xlinkHref="#picture-icon" />
                    </svg>Manage Items</a></li>
                    <li><a href="14-profile-payment-history.html"><svg className="crumina-icon">
                      <use xlinkHref="#dollar-icon" />
                    </svg>Payouts</a></li>
                    <li><a href="15-profile-purchases.html"><svg className="crumina-icon">
                      <use xlinkHref="#wallet-icon" />
                    </svg>Purchases</a></li>
                    <li><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#circle-checked-icon" />
                    </svg>Get Verified</a></li>
                    <li className="logout"><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#logout-icon" />
                    </svg>Log Out</a></li>
                  </ul>
                </div>
                <div className="profile-dropdown-footer">
                  <div className="mode-toggle">
                    <div className="mode-title"><span><svg className="crumina-icon">
                      <use xlinkHref="#moon-icon" />
                    </svg></span>Night-mode</div>
                    <label className="toggle-control">
                      <input type="checkbox" defaultChecked="checked" />
                      <span className="control" />
                    </label>
                  </div>
                </div>
              </div>
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
    </nav>

  </div>
}


export default Header;
