// @ts-ignore
import { BehaviorSubject } from "rxjs";

const accountSubject = new BehaviorSubject(null);

export const accountService = {
  loginFacebook,
  loginGoogleSuccess,
  loginGoogleFailure,
  account: accountSubject.asObservable(),
  get accountValue() {
    return accountSubject.value;
  },
};

async function loginFacebook() {
  console.log("facebook login");
}

async function loginGoogleSuccess() {
  console.log("google login success");
}

async function loginGoogleFailure() {
  console.log("google login failure");
}