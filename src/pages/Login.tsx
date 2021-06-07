import React from "react";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { accountService } from "../services/account.service";

const responseGoogleSuccess = (response: any) => {
  accountService.loginGoogleSuccess();
};

const responseGoogleFailure = (response: any) => {
    accountService.loginGoogleFailure();
};

const responseFacebook = (response: any) => {
  accountService.loginFacebook();
};

export function Login() {
  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={"single_host_origin"}
      />
      <br />
      <FacebookLogin
        appId={`${process.env.REACT_APP_FB_ID}`}
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}
