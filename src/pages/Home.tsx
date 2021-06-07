import React from "react";
import { accountService } from "../services/account.service";

export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <button onClick={accountService.logout}>logout</button>
    </div>
  );
}
