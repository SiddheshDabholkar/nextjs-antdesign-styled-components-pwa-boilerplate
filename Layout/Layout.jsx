import React from "react";
import SHeader from "./Header";
import SFooter from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <SHeader />
      <div>{children}</div>
      <SFooter />
    </>
  );
}
