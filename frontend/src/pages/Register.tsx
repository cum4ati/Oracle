import "../styles.css";

export default function Register(){
  return (

      <div className="login-root">
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1><a className="header-name" href="/" rel="dofollow">Shakespeare</a></h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Sign in to your account</span>
                <form id="stripe-login">
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                      <div className="reset-pass">
                        <a href="#">Forgot your password?</a>
                      </div>
                    </div>
                    <input type="password" name="password" />
                  </div>
                  <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <label htmlFor="checkbox">
                      <input type="checkbox" name="checkbox" /> Stay signed in for a week
                    </label>
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" defaultValue="Continue" />
                  </div>
                  <div className="field">
                    <a className="ssolink" href="#">Use single sign-on (Google) instead</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>Don't have an account? <a href>Sign up</a></span>
              <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span><a href="#">©2022 Shakespeare</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}