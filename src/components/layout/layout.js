import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Backdrop from "../backdrop/backdrop";

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <div>
          <Header />
          <Sidebar />
          <Backdrop />
          <main>{children}</main>
          <Footer />
        </div>
    )
  }
}