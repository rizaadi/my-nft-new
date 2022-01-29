import React from 'react';

const Laporan = () => {
  return (
    <div className="primary-content-area container content-padding">
    <div className="page-title-section">
      <h2>Laporan<span className="gradient-text"> NFT</span></h2>
    </div>
    {/* FILTERABLE BAR */}
    <div className="collectors-filter">
      <form className="flex-right">
        <select className="select-nice">
          <option value="all-time">All Timbjbcewe</option>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
        </select>
        <select className="select-nice">
          <option value="show-in-usd">Show in USD</option>
          <option value="show-in-euro">Show in Euro</option>
        </select>
      </form>
    </div>
    {/* FILTERABLE BAR */}
    {/* COLLECTORS LIST */}
    <div className="collectors-box">
      <table className="content-table">
        <thead>
          <tr>
            <th scope="col" className="heading-label">Collector</th>
            <th scope="col" className="heading-label">Items Collected</th>
            <th scope="col" className="heading-label">Items Owned</th>
            <th scope="col" className="heading-label">AVG PURCHASE PRICE</th>
            <th scope="col" className="heading-label">Total purchased</th>
            <th scope="col" className="heading-label">Top purchase</th>
            <th scope="col" className="heading-label">Item resold</th>
            <th scope="col" className="heading-label">Avg.resell price</th>
            <th scope="col" className="heading-label">Total resold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar-2.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span>
                  </a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">Jackie Jones</a></div>
                  <div className="avatar-meta">@JackieJ</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">196</td>
            <td data-label="Items Owned" className="stats-item">32</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$4.530</td>
            <td data-label="Total purchased" className="stats-item">$230.580</td>
            <td data-label="Top purchase" className="stats-item">$26.000</td>
            <td data-label="Item resold" className="stats-item">47</td>
            <td data-label="Avg.resell price" className="stats-item">$1.693</td>
            <td data-label="Total resold" className="stats-item">$68.235</td>
          </tr>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span></a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">Dexter Stark</a></div>
                  <div className="avatar-meta">@dexterstark</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">153</td>
            <td data-label="Items Owned" className="stats-item">44</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$4.586</td>
            <td data-label="Total purchased" className="stats-item">$265.362</td>
            <td data-label="Top purchase" className="stats-item">$12.354</td>
            <td data-label="Item resold" className="stats-item">34</td>
            <td data-label="Avg.resell price" className="stats-item">$1.224</td>
            <td data-label="Total resold" className="stats-item">$49.258</td>
          </tr>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar-13.png" alt="avatar" />
                  </a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">JennArt</a></div>
                  <div className="avatar-meta">@jennart</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">132</td>
            <td data-label="Items Owned" className="stats-item">5</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$2.365</td>
            <td data-label="Total purchased" className="stats-item">$102.365</td>
            <td data-label="Top purchase" className="stats-item">$6.322</td>
            <td data-label="Item resold" className="stats-item">30</td>
            <td data-label="Avg.resell price" className="stats-item">$2.014</td>
            <td data-label="Total resold" className="stats-item">$60.255</td>
          </tr>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar-14.png" alt="avatar" /></a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">Derek Greyson</a></div>
                  <div className="avatar-meta">@dgreyson</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">98</td>
            <td data-label="Items Owned" className="stats-item">12</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$3.124</td>
            <td data-label="Total purchased" className="stats-item">$154.236</td>
            <td data-label="Top purchase" className="stats-item">$30.254</td>
            <td data-label="Item resold" className="stats-item">-</td>
            <td data-label="Avg.resell price" className="stats-item">-</td>
            <td data-label="Total resold" className="stats-item">-</td>
          </tr>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar-3.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span></a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">The Green Goo</a></div>
                  <div className="avatar-meta">@daGreenGoo</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">87</td>
            <td data-label="Items Owned" className="stats-item">36</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$983</td>
            <td data-label="Total purchased" className="stats-item">$96.785</td>
            <td data-label="Top purchase" className="stats-item">$1.255</td>
            <td data-label="Item resold" className="stats-item">27</td>
            <td data-label="Avg.resell price" className="stats-item">$1.277</td>
            <td data-label="Total resold" className="stats-item">$29.325</td>
          </tr>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar-15.png" alt="avatar" /></a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">Crimson Ray</a></div>
                  <div className="avatar-meta">@crimsonray</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">971</td>
            <td data-label="Items Owned" className="stats-item">9</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$1.235</td>
            <td data-label="Total purchased" className="stats-item">$100.254</td>
            <td data-label="Top purchase" className="stats-item">$4.253</td>
            <td data-label="Item resold" className="stats-item">-</td>
            <td data-label="Avg.resell price" className="stats-item">-</td>
            <td data-label="Total resold" className="stats-item">-</td>
          </tr>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar-5.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span></a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">Noir Artworks</a></div>
                  <div className="avatar-meta">@noirArtks</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">70</td>
            <td data-label="Items Owned" className="stats-item">0</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$4.255</td>
            <td data-label="Total purchased" className="stats-item">$247.122</td>
            <td data-label="Top purchase" className="stats-item">$24.333</td>
            <td data-label="Item resold" className="stats-item">-</td>
            <td data-label="Avg.resell price" className="stats-item">-</td>
            <td data-label="Total resold" className="stats-item">-</td>
          </tr>
          <tr>
            <td data-label="Collector">
              <div className="collector-info avatar-block">
                <div className="avatar box-42">
                  <a href="08-profile-page.html">
                    <img src="img/avatar-10.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span>
                  </a>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title"><a href="08-profile-page.html">Nicholas Stevens</a></div>
                  <div className="avatar-meta">@nickstevens</div>
                </div>
              </div>
            </td>
            <td data-label="Items Collected" className="stats-item">54</td>
            <td data-label="Items Owned" className="stats-item">5</td>
            <td data-label="AVG PURCHASE PRICE" className="stats-item">$3.253</td>
            <td data-label="Total purchased" className="stats-item">$199.548</td>
            <td data-label="Top purchase" className="stats-item">$18.254</td>
            <td data-label="Item resold" className="stats-item">33</td>
            <td data-label="Avg.resell price" className="stats-item">$945</td>
            <td data-label="Total resold" className="stats-item">$34.256</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* COLLECTORS LIST */}
    {/* PAGINATION */}
    <div className="pagination-section flex-center">
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
    {/* PAGINATION */}
  </div>
  )
}

export default Laporan;
