import React from 'react';
import { Link } from 'react-router-dom';

const Manage = () => {
  return(
    <div className="primary-content-area container content-padding grid-small-sidebar-left">
    <aside>
      {/*    dashboard menu */}
      <div className="user-db-menu-ds">
      <ul className="profile-menu-ds">
            <li><Link to="/"><svg className="crumina-icon">
              <use xlinkHref="#dashboard-icon" />
            </svg>Dashboard</Link></li>
            <li><Link to="/form"><svg className="crumina-icon">
              <use xlinkHref="#picture-icon" />
            </svg>Upload Item</Link></li>
            <li><Link to="/manage"><svg className="crumina-icon">
              <use xlinkHref="#picture-icon" />
            </svg>Manage Item</Link></li>
            <li className="logout"><a href="%21.html#"><svg className="crumina-icon">
              <use xlinkHref="#logout-icon" />
            </svg>Log Out</a></li>
          </ul>
      </div>
    </aside>
    <div className="main-content-area">
      <div className="page-title-section">
        <h2><span className="gradient-text">Manage</span> Items</h2>
      </div>
      {/*   items grid */}
      <div className="featured-box manage-items">
        <div className="featured-box-wrapper grid-4-columns">
          <div className="create-item">
            <div className="create-item-wrapper">
                <Link to="/form">
              <div className="create-item-content">
                <div className="create-item-image">
                  <svg className="crumina-icon">
                    <use xlinkHref="#upload-icon" />
                  </svg>
                  
                </div>
                <div className="create-item-info">
                  <div className="small-title">Create a New Item!
                  </div>
                  <div className="description">Click here to start</div>
                </div>
              </div>
              </Link>
              <div className="create-item-post-content">
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-29.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title">
                    <a href="05-product.html">Youtube Gaming Thumbnails Pack 30</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-25.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category ui-templates">
                    UI templates
                  </div>
                  <div className="title">
                    <a href="05-product.html">Cryptoki - NFT and Digital Market...</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$12.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-31.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title">
                    <a href="05-product.html">Phantom Cloud - Digital Artist PSD...</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$10.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-32.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title">
                    <a href="05-product.html">Twitter Gaming Headers Pack 07</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-42.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title">
                    <a href="05-product.html">Twitter Gaming Headers Pack 09</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-34.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title">
                    <a href="05-product.html">Youtube Gaming Thumbnails Pack 05</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-35.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title">
                    <a href="05-product.html">Twitter Gaming Headers Pack 01</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <button className="btn btn-small-wide btn-dark">Edit</button>
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product.html">
                    <img src="img/content/items/featured-item-40.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title">
                    <a href="05-product.html">Youtube Gaming Thumbnails Pack 11</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="https://html.crumina.net/cryptoki-html/"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*           pagination */}
      <div className="pagination-section flex-right">
        <ul className="pagination-list">
          <li className="page-item page-nav-prev"><a href="#">Prev</a></li>
          <li className="page-item"><a href="#">01</a></li>
          <li className="page-item"><a href="#">02</a></li>
          <li className="page-item"><a href="#">03</a></li>
          <li className="page-item page-more-link"><a href="#">...</a></li>
          <li className="page-item"><a href="#">16</a></li>
          <li className="page-item page-nav-next"><a href="#">Next</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  )
};

export default Manage;
