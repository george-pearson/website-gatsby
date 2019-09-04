import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
    )
  }
}