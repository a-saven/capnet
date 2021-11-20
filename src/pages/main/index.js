import React from "react";
import Feed from "./feed";
import Input from "./input";
import AppBar from "./appBar";
import UserQuery from "./userQuery";

export default function Main () {
  return (
    <UserQuery>
      <AppBar />
      <Feed />
      <Input />
    </UserQuery>
  );
};