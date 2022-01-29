import React from 'react';

const Register = () => {
  return( 
    <div className="primary-content-area container content-padding">
    <div className="extra-small-section">
      <div className="page-title text-center">
        <h2><span className="gradient-text">Register</span> Account</h2>
      </div>
      <form id="sign-up" className="tk-lp-form user-register-kit-register tk-lp-tabs-form-content active" data-handler="lrk_register_action"><input type="hidden" name="redirect_to" defaultValue /><input type="hidden" name="after_login" defaultValue="auto_login" />
        <div className="tk-lp-alert-cont" />
        <div className="tk-lp-form-item"><label htmlFor="sign_up_username" className="tk-lp-label">Username</label><input className="tk-lp-input" id="sign_up_username" name="user_login" type="text" /></div>
        <div className="tk-lp-form-item"><label htmlFor="sign_up_email-address" className="tk-lp-label">Email
            Address</label><input className="tk-lp-input" id="sign_up_email-address" name="user_email" type="text" /></div>
        <div />
        <div className="tk-lp-form-item"><label htmlFor="sign_up_password" className="tk-lp-label">Password</label><input className="tk-lp-input" id="sign_up_password" name="user_password" type="password" /></div>
        <div className="tk-lp-form-item"><label htmlFor="sign_up_confirm-password" className="tk-lp-label">Confirm
            Password</label><input className="tk-lp-input" id="sign_up_confirm-password" name="user_password_confirm" type="password" /></div>
        <div className="tk-lp-form-item">
          <div className="tk-lp-check"><label className="tk-lp-checkbox"><input type="checkbox" name="gdpr" defaultValue={1} /><span className="tk-lp-control-indicator" /></label>
            <div className="tk-lp-check-text">I agree to <a href="#" target="_blank" rel="noopener noreferrer">Privacy
                Policy</a></div>
          </div>
        </div><button type="button" className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full">Register Now</button><button type="button" className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item" data-id="sign-in">I have an account!</button>
      </form>
      <div className="register-notice">
        You’ll receive a confirmation email in your inbox with a link to activate your account.
      </div>
    </div>
  </div>
  
  )
}

export default Register;
