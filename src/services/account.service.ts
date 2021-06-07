// @ts-ignore
import { BehaviorSubject } from "rxjs";

const accountSubject = new BehaviorSubject(null);

export const accountService = {
  loginFacebook,
  loginGoogle,
  account: accountSubject.asObservable(),
  get accountValue() {
    return accountSubject.value;
  },
};

async function loginFacebook() {
  console.log("facebook login");
}

async function loginGoogle() {
  console.log("facebook google");
}
