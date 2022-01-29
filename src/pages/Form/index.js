import React from 'react';

const Form = () => {
  return (
    <div className="main-content-area">
    <div className="page-title-section">
      <h2><span className="gradient-text">Upload</span> Item</h2>
    </div>
    {/*  upload item form */}
    <form className="cryptoki-form" id="upload-item-form">
      <div className="upload-row">
        <div className="upload-column">
          <h5>Main Details</h5>
          <div className="form-field">
            <label htmlFor="item-category">Item Category</label>
            <select id="item-category">
              <option value>Select a category</option>
              <option value="coded-templates">Coded templates</option>
              <option value="social-graphics">Social graphics</option>
              <option value="ui-templates">UI templates</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="item-name">Item name</label>
            <input type="text" id="item-name" />
          </div>
          <div className="form-field">
            <label htmlFor="item-description">Description</label>
            <textarea id="item-description" cols={30} rows={10} defaultValue={""} />
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="item-price">Item Price</label>
              <input type="text" id="item-price" />
            </div>
            <div className="form-field">
              <label htmlFor="item-tags">Item Tags</label>
              <input type="text" id="item-tags" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="software-used">Software Usedjkdsbcksbk</label>
              <input type="text" id="software-used" />
            </div>
            <div className="form-field">
              <label htmlFor="files-included">Files Included</label>
              <input type="text" id="files-included" />
            </div>
          </div>
          <input className="btn btn-wide gradient-background" type="submit" defaultValue="Upload Item" />
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
            <div className="uploaded-preview"><span className="bold green">twitterheaders04.zip</span>
              uploaded <button className="close"><svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg></button></div>
          </div>
          <div className="upload-container">
            <div className="artwork-upload">
              <div className="label">Preview Image</div>
              <div className="upload-box"><svg className="crumina-icon">
                  <use xlinkHref="#upload-icon" />
                </svg>
                <div className="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
                <button className="btn btn-normal btn-dark browse-btn waves-effect waves-button waves-float waves-light">Browse
                  File</button>
              </div>
            </div>
            <div className="uploaded-preview"><span className="bold green">twitterheaders04.zip</span>
              uploaded <button className="close"><svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg></button></div>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Form;
