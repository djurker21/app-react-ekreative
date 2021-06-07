// @ts-ignore
import { BehaviorSubject } from "rxjs";

const accountSubject = new BehaviorSubject(null);

export const accountService = {
  loginFacebook,
  loginGoogleSuccess,
  loginGoogleFailure,
  logout,
  account: accountSubject.asObservable(),
  get accountValue() {
    return accountSubject.value;
  },
};

function loginFacebook(response: any) {
  console.log(response);
  console.log("facebook login");
  accountSubject.next(response);
}

function loginGoogleSuccess(response: any) {
  console.log(response);
  console.log("google login success");
  accountSubject.next(response.profileObj);
}

function loginGoogleFailure(response: any) {
  console.log(response);
  console.log("google login failure");
}

function logout() {
  accountSubject.next("");
}
