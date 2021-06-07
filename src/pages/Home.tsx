import React from "react";
import { accountService } from "../services/account.service";

export function Home() {
  const account = accountService.accountValue;
  let data;

  if (account && account.profileObj) {
    console.log("google");
    data = (
      <div>
        <p>logged in with google</p>
        <p>email: {account.profileObj.email}</p>
        <p>name: {account.profileObj.name}</p>
        <img src={account.profileObj.imageUrl} alt={'google pic'} />
      </div>
    );
  } else {
    console.log("facebook");
    data = (
      <div>
        <p>logged in with facebook</p>
        <p>email: {account.email}</p>
        <p>name: {account.name}</p>
        <img src={account.picture.data.url}  alt={'facebook pic'} />
      </div>
    );
  }

  return (
    <div>
      <h2>Home</h2>
      <div>
        <p>user info: </p>
        {data}
      </div>
      <button onClick={accountService.logout}>logout</button>
    </div>
  );
}
