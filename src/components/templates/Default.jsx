import React from "react";

import { AppHeader, AppFooter } from "../organisms";

export default function Default(props) {
  return (
    <div>
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  );
}
