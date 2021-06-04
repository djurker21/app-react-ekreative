import React from "react";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const responseGoogle = (response: any) => {
  console.log(response);
};

const responseFacebook = (response: any) => {
  console.log(response);
};

export function Login() {
  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
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