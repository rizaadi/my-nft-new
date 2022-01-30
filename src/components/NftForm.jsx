import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NftForm = props => {
  const [value, setValue] = useState({ content: props.content, title: props.title || '' });
  const onChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };
  return (
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
          <h2><span className="gradient-text">Upload</span> Item</h2>
        </div>
        {/*  upload item form */}
        <form className="cryptoki-form" onSubmit={e => {
          e.preventDefault();
          props.action({
            variables: {
              ...value
            }
          });
        }}>
          <div className="upload-row">
            <div className="upload-column">
              <h5>Main Details</h5>
              <div className="form-field">
                <label htmlFor="item-name">Title</label>
                <input type="text" id="item-name" name="title" value={value.title} onChange={onChange} />
              </div>
              <div className="form-field">
                <label htmlFor="item-description">Description</label>
                <textarea id="item-description" name="content" value={value.content} onChange={onChange} cols={30} rows={10} defaultValue={""} />
              </div>
              <button className="btn btn-wide gradient-background" type="submit">Submit</button>
            </div>
            <div className="upload-column">
              <h5>Upload</h5>
              <div className="upload-container">
                <div className="artwork-upload">
                  <div className="label">Main File</div>
                  <div className="upload-box"><svg className="crumina-icon">
                    <use xlinkHref="#upload-icon" />
                  </svg>
                    <div className="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
                    <button className="btn btn-normal btn-dark browse-btn waves-effect waves-button waves-float waves-light">Browse
                      File</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default NftForm;
